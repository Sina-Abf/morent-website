"use client";

import { useAllCars } from "@/hooks/dataRequest/all-cars";
import { useCarsStore } from "@/store/store";
import CarRow from "../components/car-row";
import Spinner from "../components/ui/spinner";
import Filters from "./components/filters";
import OptionsFull from "./components/options-full";
const Cars = () => {
  const carsData = useCarsStore((state: any) => state.cars);

  const { isLoading } = useAllCars();

  return (
    <>
      <main className=" grid grid-cols-12 gap-4 container mx-auto max-w-screen-2xl">
        <div className="col-span-2 hidden lg:block ">
          <Filters />
        </div>
        <div className="col-span-12 lg:col-span-10 p-4">
          <OptionsFull className="mb-8" />
          <div className="flex justify-center items-center">
            {isLoading && <Spinner />}
          </div>
          {!isLoading && (
            <CarRow className="lg:!grid-cols-3" mobileView data={carsData} />
          )}
          {!isLoading && (
            <div className="flex justify-between px-10 mb-14 items-center">
              <div></div>
              <button className="rounded-md bg-primary text-white font-semibold py-2 px-4">
                Show More Car
              </button>
              <h2 className="text-secondary-300 text-lg font-semibold">
                120 Car
              </h2>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
export default Cars;
