"use client";

import useFilterNameCount from "@/hooks/use-filter-name-count";
import { allCars } from "@/public/data";
import { useCarsStore } from "@/store/store";
import { ChangeEvent } from "react";

const Filters = () => {
  const carsFilter = useCarsStore((state: any) => state.filterCars);
  const toggleCategory = useCarsStore((state: any) => state.toggleCategory);

  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const labelName = event.target.id.split("-")[1];
    if (event.target.checked) {
      toggleCategory(labelName);
      carsFilter();
    } else {
      toggleCategory(labelName);
      carsFilter();
    }
  };

  const convertedData = useFilterNameCount(allCars);
  return (
    <aside className="bg-white h-full p-4 text-secondary-300 font-semibold">
      <h3 className="mb-4">TYPE</h3>
      <div className="flex flex-col gap-y-4 pl-3">
        {Object.keys(convertedData).map((categoryName) => (
          <div key={categoryName} className="flex items-center gap-x-3">
            <input
              onChange={checkboxChangeHandler}
              className="text-primary rounded p-2 focus:ring-0 focus:ring-offset-0"
              id={`checkbox-${categoryName}`}
              type="checkbox"
            />
            <label className="space-x-1" htmlFor="checkbox" key={categoryName}>
              <span className="text-secondary-400">{categoryName}</span>
              <span className="text-secondary-300">
                ({convertedData[categoryName]})
              </span>
            </label>
          </div>
        ))}
      </div>
    </aside>
  );
};
export default Filters;
