const SUPABASE_URL = "https://mzynvwvsyusxlnvifwlq.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_j_OFriYB6cTEM8RXS9dSEQ_hBLO_bgn";

if (typeof window.supabase?.createClient !== "function") {
  throw new Error("Supabase JavaScript SDK gagal dimuat.");
}

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY,
);
