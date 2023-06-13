'use client';

import CarRow from './components/car-row';
import Hero from './components/hero';

import { useAllCars } from '@/hooks/dataRequest/all-cars';
import Button from './components/ui/button';
import Link from 'next/link';

export default function Home() {
  const { data, isLoading } = useAllCars();

  const popularCars = data.slice(0, 4);
  const recommendedCars = data.filter((car) => car.recommended);

  return (
    <main className={`md:p-4`}>
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
        <Link href="/cars">
          <Button className="rounded-md bg-primary text-white font-semibold py-2 px-4">
            Show More Car
          </Button>
        </Link>
        <h2 className="text-secondary-300 text-lg font-semibold">120 Car</h2>
      </div>
    </main>
  );
}
