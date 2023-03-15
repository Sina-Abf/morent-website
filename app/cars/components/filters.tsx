"use client";

import useFilterNameCount from "@/hooks/use-filter-name-count";
import { allCars } from "@/public/data";
import CheckboxText from "./checkbox-text";

const Filters = () => {
  const convertedDataCategory = useFilterNameCount(allCars, "category");
  const convertedDataCapacity = useFilterNameCount(allCars, "capacity");
  return (
    <aside className="bg-white h-full p-4 text-secondary-300 font-semibold flex flex-col gap-y-4">
      <div className="flex flex-col gap-y-4 pl-3 mb-4">
        <h3>TYPE</h3>
        {Object.keys(convertedDataCategory).map((dataName) => (
          <CheckboxText
            key={dataName}
            data={convertedDataCategory}
            dataName={dataName}
            dataType="category"
          />
        ))}
      </div>
      <div className="flex flex-col gap-y-4 pl-3">
        <h3>CAPACITY</h3>
        {Object.keys(convertedDataCapacity).map((dataName) => (
          <CheckboxText
            key={dataName}
            data={convertedDataCapacity}
            dataName={dataName}
            dataType="capacity"
          />
        ))}
      </div>
    </aside>
  );
};
export default Filters;
