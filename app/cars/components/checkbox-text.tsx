import { useCarsStore } from "@/store/store";
import { ChangeEvent } from "react";

const CheckboxText = ({
  data,
  dataName,
  dataType,
}: {
  data: any;
  dataName: string;
  dataType: string;
}) => {
  const carsFilter = useCarsStore((state: any) => state.filterCars);
  const toggleCategory = useCarsStore((state: any) => state.toggleCategory);

  const checkboxChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const labelName = event.target.id.split("-")[1];
    if (event.target.checked) {
      toggleCategory(labelName);
      carsFilter(dataType);
    } else {
      toggleCategory(labelName);
      carsFilter(dataType);
    }
  };

  return (
    <div className="flex items-center gap-x-3">
      <input
        onChange={checkboxChangeHandler}
        className="text-primary rounded p-2 focus:ring-0 focus:ring-offset-0"
        id={`checkbox-${dataName}`}
        type="checkbox"
      />
      <label
        className="space-x-1"
        htmlFor={`checkbox-${dataName}`}
        key={dataName}
      >
        <span className="text-secondary-400">{dataName}</span>
        <span className="text-secondary-300">({data[dataName]})</span>
      </label>
    </div>
  );
};
export default CheckboxText;
