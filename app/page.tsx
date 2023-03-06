import CarRow from "@/components/car-row";
import Hero from "@/components/hero";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { popularCar, recommendationCar } from "@/public/data";

export default function Home() {
  return (
    <main className={`${plusJakarta.className} md:p-4`}>
      <Hero />
      <CarRow rowTitle="Popular Car" data={popularCar} />
      <CarRow rowTitle="Recomendation Car" data={recommendationCar} />
      <div className="flex justify-between px-10 mb-14 items-center">
        <div></div>
        <button className="rounded-md bg-primary text-white font-semibold py-2 px-4">
          Show More Car
        </button>
        <h2 className="text-secondary-300 text-lg font-semibold">120 Car</h2>
      </div>
    </main>
  );
}
