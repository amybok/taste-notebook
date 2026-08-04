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
  // await query();
  // console.log("yes")
  // return new Response('Hello from Vercel!');
}

export async function POST(request) {
  const { error, status, statusText } = await supabase
  .from('records')
  .insert({ beans_name: "Carambolo", brand: "Manta Ray", region: "South America", method: "filter", varietal: null, type: "blend" })
  .select();

  if (error) {
    console.log(error, status, statusText);
  }
  else {
    console.log("success", status, statusText);
    return new Response('Hello from Vercel!');
  }
}

export async function PATCH(request) {

}