import { supabase } from "../lib/supabase";

const { data, error } = await supabase
  .from("information_schema.tables")
  .select("table_name")

if (error) {
  // Logs the full error: message, code, details, and hint.
  console.error(error)
} else {
  console.log(data)
}

export function GET(request) {
  return new Response('Hello from Vercel!');
}