"use client";

import CarRow from "@/components/car-row";
import Hero from "@/components/hero";
import { Plus_Jakarta_Sans } from "next/font/google";

import { useAllCars } from "@/hooks/dataRequest/all-cars";

export default function Home() {
  const { data, isLoading } = useAllCars();

  const popularCars = data.filter((car) => car.popular_car);
  const recommendedCars = data.filter((car) => car.recommended);

  return (
    <main className={`md:p-4 container mx-auto max-w-screen-2xl`}>
      <Hero />
      <CarRow rowTitle="Popular Car" data={popularCars} isLoading={isLoading} />
      <CarRow
        mobileView
        rowTitle="Recomendation Car"
        data={recommendedCars}
        isLoading={isLoading}
      />
      <div className="flex justify-between px-10 mb-14 mt-10 items-center">
        <div></div>
        <button className="rounded-md bg-primary text-white font-semibold py-2 px-4">
          Show More Car
        </button>
        <h2 className="text-secondary-300 text-lg font-semibold">120 Car</h2>
      </div>
    </main>
  );
}
