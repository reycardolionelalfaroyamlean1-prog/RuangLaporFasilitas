import "@supabase/functions-js/edge-runtime.d.ts";
import { withSupabase } from "@supabase/server";

const allowedOrigins = new Set([
  "https://reycardolionelalfaroyamlean1-prog.github.io",
  "http://localhost:3000",
  "http://127.0.0.1:3000",
]);
const maximumPayloadBytes = 16 * 1024;
const initialStatusName = "Menunggu Verifikasi";
const allowedFields = new Set([
  "category_id",
  "facility_id",
  "title",
  "description",
  "location_detail",
]);

function corsHeaders(origin: string | null): Headers {
  const headers = new Headers({
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  });
  if (origin && allowedOrigins.has(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }
  return headers;
}

function withCors(response: Response, origin: string | null): Response {
  const headers = new Headers(response.headers);
  corsHeaders(origin).forEach((value, name) => headers.set(name, value));
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function jsonResponse(body: Record<string, unknown>, status: number): Response {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function parseDatabaseId(value: unknown): string | null {
  const id = typeof value === "string"
    ? value
    : typeof value === "number" && Number.isSafeInteger(value)
    ? String(value)
    : "";
  if (!/^[1-9]\d{0,18}$/.test(id)) return null;
  return BigInt(id) <= 9223372036854775807n ? id : null;
}

function cleanText(value: unknown, maximumLength: number, allowNewlines = false): string | null {
  if (typeof value !== "string") return null;
  const text = value.trim();
  const controlCharacters = allowNewlines
    ? /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/
    : /[\u0000-\u001f\u007f]/;
  if (!text || text.length > maximumLength || controlCharacters.test(text)) return null;
  return text;
}

async function readJsonPayload(
  req: Request,
): Promise<{ value: unknown } | { error: "invalid_json" | "payload_too_large" }> {
  const contentLength = Number(req.headers.get("content-length"));
  if (Number.isFinite(contentLength) && contentLength > maximumPayloadBytes) {
    return { error: "payload_too_large" };
  }

  const reader = req.body?.getReader();
  if (!reader) return { error: "invalid_json" };

  const chunks: Uint8Array[] = [];
  let totalBytes = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    totalBytes += value.byteLength;
    if (totalBytes > maximumPayloadBytes) {
      await reader.cancel();
      return { error: "payload_too_large" };
    }
    chunks.push(value);
  }

  const bytes = new Uint8Array(totalBytes);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }

  try {
    return { value: JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes)) };
  } catch {
    return { error: "invalid_json" };
  }
}

function generateTicketNumber(): string {
  const randomValues = new Uint32Array(2);
  crypto.getRandomValues(randomValues);
  const randomNumber = (BigInt(randomValues[0]) << 32n) | BigInt(randomValues[1]);
  const ticketSuffix = (randomNumber % 9000000000n) + 1000000000n;
  return `RLF-${ticketSuffix}`;
}

const submitReport = withSupabase({ auth: ["publishable"] }, async (req, ctx) => {
  if (req.method !== "POST") {
    return jsonResponse({ error: "method_not_allowed" }, 405);
  }
  if (!req.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    return jsonResponse({ error: "invalid_content_type" }, 415);
  }

  const parsed = await readJsonPayload(req);
  if ("error" in parsed) {
    return jsonResponse({ error: parsed.error }, parsed.error === "payload_too_large" ? 413 : 400);
  }
  if (!isRecord(parsed.value)) {
    return jsonResponse({ error: "invalid_request" }, 400);
  }
  if (Object.keys(parsed.value).some((field) => !allowedFields.has(field))) {
    return jsonResponse({ error: "unexpected_field" }, 400);
  }

  const categoryId = parseDatabaseId(parsed.value.category_id);
  const facilityValue = parsed.value.facility_id;
  const facilityId = facilityValue === undefined || facilityValue === null || facilityValue === ""
    ? null
    : parseDatabaseId(facilityValue);
  const title = cleanText(parsed.value.title, 200);
  const description = cleanText(parsed.value.description, 10000, true);
  const locationDetail = cleanText(parsed.value.location_detail, 1000);

  if (!categoryId) return jsonResponse({ error: "invalid_category_id" }, 400);
  if (facilityValue !== undefined && facilityValue !== null && facilityValue !== "" && !facilityId) {
    return jsonResponse({ error: "invalid_facility_id" }, 400);
  }
  if (!title) return jsonResponse({ error: "invalid_title" }, 400);
  if (!description) return jsonResponse({ error: "invalid_description" }, 400);
  if (!locationDetail) return jsonResponse({ error: "invalid_location_detail" }, 400);

  const { data: category, error: categoryError } = await ctx.supabaseAdmin
    .from("categories")
    .select("id")
    .eq("id", categoryId)
    .maybeSingle();
  if (categoryError) {
    console.error("Report category lookup failed.", { code: categoryError.code });
    return jsonResponse({ error: "reference_lookup_failed" }, 503);
  }
  if (!category) return jsonResponse({ error: "invalid_category_id" }, 400);

  if (facilityId) {
    const { data: facility, error: facilityError } = await ctx.supabaseAdmin
      .from("facilities")
      .select("id")
      .eq("id", facilityId)
      .maybeSingle();
    if (facilityError) {
      console.error("Report facility lookup failed.", { code: facilityError.code });
      return jsonResponse({ error: "reference_lookup_failed" }, 503);
    }
    if (!facility) return jsonResponse({ error: "invalid_facility_id" }, 400);
  }

  const { data: statuses, error: statusError } = await ctx.supabaseAdmin
    .from("report_status")
    .select("id, status_name")
    .eq("status_name", initialStatusName)
    .limit(2);
  if (statusError || !statuses || statuses.length !== 1) {
    console.error("Initial report status lookup failed.", { code: statusError?.code || "invalid_status_rows" });
    return jsonResponse({ error: "report_status_unavailable" }, 503);
  }
  const statusId = parseDatabaseId(statuses[0].id);
  if (!statusId || statuses[0].status_name !== initialStatusName) {
    console.error("Initial report status row is invalid.");
    return jsonResponse({ error: "report_status_unavailable" }, 503);
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    const ticketNumber = generateTicketNumber();
    const { data: report, error: insertError } = await ctx.supabaseAdmin
      .from("reports")
      .insert({
        ticket_number: ticketNumber,
        user_id: null,
        facility_id: facilityId,
        category_id: categoryId,
        title,
        description,
        location_detail: locationDetail,
        photo_url: null,
        status: initialStatusName,
        status_id: statusId,
      })
      .select("ticket_number, status, created_at")
      .single();

    if (!insertError && report) {
      return jsonResponse({
        ticket_number: report.ticket_number,
        status: report.status,
        created_at: report.created_at,
      }, 201);
    }
    if (insertError?.code === "23505") continue;

    console.error("Report insert failed.", { code: insertError?.code || "unknown" });
    return jsonResponse({ error: "submission_failed" }, 500);
  }

  return jsonResponse({ error: "ticket_generation_failed" }, 503);
});

export default {
  async fetch(req: Request): Promise<Response> {
    const origin = req.headers.get("origin");
    if (origin && !allowedOrigins.has(origin)) {
      return withCors(jsonResponse({ error: "origin_not_allowed" }, 403), origin);
    }
    if (req.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }
    if (req.method !== "POST") {
      return withCors(jsonResponse({ error: "method_not_allowed" }, 405), origin);
    }
    return withCors(await submitReport(req), origin);
  },
};
