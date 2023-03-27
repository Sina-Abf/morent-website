import data from "../../../public/db.json";

export async function GET() {
  return new Response(JSON.stringify(data.cars));
}
