const SUPABASE_URL = "https://mzynvwvsyusxlnvifwlq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_j_OFriYB6cTEM8RXS9dSEQ_hBLO_bgn";

if (typeof window.supabase?.createClient !== "function") {
  throw new Error("Supabase JavaScript SDK gagal dimuat.");
}

const supabaseAuthCallbackParams = new URLSearchParams(
  `${window.location.search}&${window.location.hash.slice(1)}`,
);
window.supabaseInviteCallback = supabaseAuthCallbackParams.get("type") === "invite";
window.supabaseRecoveryCallback = supabaseAuthCallbackParams.get("type") === "recovery";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      storage: window.sessionStorage,
    },
  },
);
