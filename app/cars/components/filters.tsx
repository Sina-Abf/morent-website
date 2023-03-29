"use client";

import { useAllCars } from "@/hooks/dataRequest/all-cars";
import useFilterNameCount from "@/hooks/use-filter-name-count";
import { useCarsStore } from "@/store/store";
import classNames from "classnames";
import CheckboxText from "./checkbox-text";

const Filters = () => {
  const { data, isSuccess } = useAllCars();

  const convertedDataCategory =
    isSuccess && useFilterNameCount(data, "category");
  const convertedDataCapacity =
    isSuccess && useFilterNameCount(data, "capacity");

  const asideOpen = useCarsStore((state: any) => state.filtersOpen);
  return (
    <aside
      className={classNames(
        "bg-white h-full p-4 text-secondary-300 font-semibold flex flex-col gap-y-4",
        !asideOpen && "hidden lg:flex",
        asideOpen && "absolute h-screen left-0 bg-white z-50"
      )}
    >
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
