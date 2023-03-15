"use client";

import CarRow from "@/components/car-row";
import { useCarsStore } from "@/store/store";
import Filters from "./components/filters";
import OptionsFull from "./components/options-full";
const Cars = () => {
  const carsData = useCarsStore((state: any) => state.cars);
  return (
    <main className=" grid grid-cols-12 gap-4">
      <div className="col-span-2 hidden md:block ">
        <Filters />
      </div>
      <div className="col-span-12 md:col-span-10 p-4">
        <OptionsFull className="mb-8" />
        <CarRow className="lg:!grid-cols-3" mobileView data={carsData} />
        <div className="flex justify-between px-10 mb-14 items-center">
          <div></div>
          <button className="rounded-md bg-primary text-white font-semibold py-2 px-4">
            Show More Car
          </button>
          <h2 className="text-secondary-300 text-lg font-semibold">120 Car</h2>
        </div>
      </div>
    </main>
  );
};
export default Cars;
