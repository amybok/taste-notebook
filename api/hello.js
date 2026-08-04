import { supabase } from "../lib/supabase.js";

async function query(){
  const { data, error } = await supabase.from("records").select("*");

  if (error) {
    // Logs the full error: message, code, details, and hint.
    console.log("error");
    console.error(error)} 
  else {
    console.log("success");
    console.log(data)};
}

async function submit(){}

export async function GET(request) {
  await query();
  console.log("yes")
  return new Response('Hello from Vercel!');
}

export async function POST(request) {
  // const { error } = await supabase
  // .from('countries')
  // .insert({ id: 1, name: 'Mordor' })
}

export async function PATCH(request) {

}