"use client";

import CarRow from "@/components/car-row";
import Hero from "@/components/hero";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
import { usePopularCarsData } from "@/hooks/dataRequest/popular-cars";
import { useRecommendedCarsData } from "@/hooks/dataRequest/recommended-cars";

export default function Home() {
  const { data: popularCarsData } = usePopularCarsData();
  const { data: recommendedCarsData } = useRecommendedCarsData();
  return (
    <main className={`${plusJakarta.className} md:p-4`}>
      <Hero />
      <CarRow rowTitle="Popular Car" data={popularCarsData} />
      <CarRow
        mobileView
        rowTitle="Recomendation Car"
        data={recommendedCarsData}
      />
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
