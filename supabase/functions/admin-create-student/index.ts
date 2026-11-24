import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";

const inviteRedirectUrl =
  "https://reycardolionelalfaroyamlean1-prog.github.io/RuangLaporFasilitas/";
const allowedFields = new Set(["full_name", "npm", "email"]);

function jsonResponse(body: Record<string, string>, status: number): Response {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function isValidEmail(email: string): boolean {
  return email.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default {
  fetch: withSupabase({ auth: "user" }, async (req, ctx) => {
    if (req.method !== "POST") {
      return jsonResponse({ error: "method_not_allowed" }, 405);
    }

    if (!req.headers.get("content-type")?.toLowerCase().includes("application/json")) {
      return jsonResponse({ error: "invalid_content_type" }, 415);
    }

    const { data: authData, error: authError } = await ctx.supabase.auth.getUser();
    if (authError || !authData.user) {
      return jsonResponse({ error: "unauthorized" }, 401);
    }

    const { data: callerProfile, error: callerProfileError } = await ctx.supabaseAdmin
      .from("users")
      .select("role")
      .eq("id", authData.user.id)
      .maybeSingle();

    if (callerProfileError) {
      console.error("Admin profile verification failed.", {
        code: callerProfileError.code,
      });
      return jsonResponse({ error: "authorization_check_failed" }, 500);
    }

    if (callerProfile?.role !== "admin") {
      return jsonResponse({ error: "forbidden" }, 403);
    }

    let payload: unknown;
    try {
      payload = await req.json();
    } catch {
      return jsonResponse({ error: "invalid_json" }, 400);
    }

    if (!isRecord(payload)) {
      return jsonResponse({ error: "invalid_request" }, 400);
    }

    if (Object.keys(payload).some((field) => !allowedFields.has(field))) {
      return jsonResponse({ error: "unexpected_field" }, 400);
    }

    const fullName = typeof payload.full_name === "string"
      ? payload.full_name.trim().replace(/\s+/g, " ")
      : "";
    const npm = typeof payload.npm === "string" ? payload.npm.trim() : "";
    const email = typeof payload.email === "string"
      ? payload.email.trim().toLowerCase()
      : "";

    if (
      fullName.length < 2 ||
      fullName.length > 120 ||
      /[\u0000-\u001f\u007f]/.test(fullName)
    ) {
      return jsonResponse({ error: "invalid_full_name" }, 400);
    }

    if (!/^\d{1,32}$/.test(npm)) {
      return jsonResponse({ error: "invalid_npm" }, 400);
    }

    if (!isValidEmail(email)) {
      return jsonResponse({ error: "invalid_email" }, 400);
    }

    const { data: existingNpm, error: npmCheckError } = await ctx.supabaseAdmin
      .from("users")
      .select("id")
      .eq("npm", npm)
      .maybeSingle();

    if (npmCheckError) {
      console.error("NPM uniqueness check failed.", { code: npmCheckError.code });
      return jsonResponse({ error: "account_check_failed" }, 500);
    }

    const { data: existingEmail, error: emailCheckError } = await ctx.supabaseAdmin
      .from("users")
      .select("id")
      .eq("email", email)
      .maybeSingle();

    if (emailCheckError) {
      console.error("Email uniqueness check failed.", {
        code: emailCheckError.code,
      });
      return jsonResponse({ error: "account_check_failed" }, 500);
    }

    if (existingNpm || existingEmail) {
      return jsonResponse({ error: "student_already_exists" }, 409);
    }

    const { data: inviteData, error: inviteError } = await ctx.supabaseAdmin.auth
      .admin.inviteUserByEmail(email, {
        redirectTo: inviteRedirectUrl,
        data: { full_name: fullName, npm },
      });

    if (inviteError || !inviteData.user) {
      if (inviteError) {
        console.error("Student invitation failed.", {
          status: inviteError.status,
          code: inviteError.code,
        });
        if (inviteError.status === 409 || inviteError.status === 422) {
          return jsonResponse({ error: "student_already_exists" }, 409);
        }
      }
      return jsonResponse({ error: "invitation_failed" }, 502);
    }

    const { data: persistedProfile, error: profileCheckError } = await ctx.supabaseAdmin
      .from("users")
      .select("id, full_name, email, npm, role")
      .eq("id", inviteData.user.id)
      .maybeSingle();

    if (profileCheckError) {
      console.error("Student profile verification failed.", {
        code: profileCheckError.code,
      });
      return jsonResponse({ error: "profile_verification_failed" }, 500);
    }

    const profileIsConsistent = persistedProfile?.full_name === fullName &&
      persistedProfile.email === email &&
      persistedProfile.npm === npm &&
      persistedProfile.role === "student";

    if (!profileIsConsistent) {
      console.error("Student profile verification failed.");
      return jsonResponse({ error: "profile_sync_incomplete" }, 500);
    }

    return jsonResponse({ success: "invitation_sent" }, 201);
  }),
};
