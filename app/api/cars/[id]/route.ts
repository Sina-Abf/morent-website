import { NextResponse } from "next/server";
import data from "../../../../public/db.json";

export async function GET(request: Request, { params }: any) {
  const id = params.id;
  const car = data.cars.find((car) => car.id === parseInt(id));
  if (car) {
    return new Response(JSON.stringify(car));
  }

  return NextResponse.json({ response: "Car Not Found!" }, { status: 404 });
}
