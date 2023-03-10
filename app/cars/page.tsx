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
      </div>
    </main>
  );
};
export default Cars;
