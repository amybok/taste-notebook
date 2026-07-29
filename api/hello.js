import { supabase } from "../lib/supabase.js";

// const { data, error } = await supabase
//   .from("information_schema.tables")
//   .select("table_name")

// if (error) {
//   // Logs the full error: message, code, details, and hint.
//   console.error(error)
// } else {
//   console.log(data)
// }

async function test(){
  const { data, error } = await supabase.from("aroma").select("*");

  if (error) {
  // Logs the full error: message, code, details, and hint.
  console.error(error)} 
  else {
  console.log(data)};
}

export function GET(request) {
  test();
  console.log("yes")
  return new Response('Hello from Vercel!');
}