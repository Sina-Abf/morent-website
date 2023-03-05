import CarRow from "@/components/car-row";
import Hero from "@/components/hero";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { popularCar } from "@/public/data";

export default function Home() {
  return (
    <main className={`${plusJakarta.className} md:p-4`}>
      <Hero />
      <CarRow rowTitle="Popular Car" data={popularCar} />
    </main>
  );
}
