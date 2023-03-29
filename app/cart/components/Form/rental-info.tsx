import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./form";
import Date from "./ui/date";
import Select from "./ui/select";
import Time from "./ui/time";

interface InputData {
  label: string;
  name: keyof Inputs;
  placeholder: string;
  options?: {
    option: string;
  }[];
}

const inputsDataPickUp: InputData[] = [
  {
    label: "Locations",
    name: "locations",
    placeholder: "Select your city",
    options: [
      {
        option: "Tabriz",
      },
      {
        option: "Tehran",
      },
      {
        option: "Shiraz",
      },
    ],
  },
  {
    label: "Date",
    name: "date",
    placeholder: "Select your date",
  },
  {
    label: "Time",
    name: "time",
    placeholder: "Select your time",
  },
];
const inputsDataDropOff: InputData[] = [
  {
    label: "Locations",
    name: "d-locations",
    placeholder: "Select your city",
    options: [
      {
        option: "Tabriz",
      },
      {
        option: "Tehran",
      },
      {
        option: "Shiraz",
      },
    ],
  },
  {
    label: "Date",
    name: "d-date",
    placeholder: "Select your date",
  },
  {
    label: "Time",
    name: "d-time",
    placeholder: "Select your time",
  },
];

const RentalInfo = ({ register }: { register: UseFormRegister<Inputs> }) => {
  return (
    <div className="p-4 bg-white rounded-md mb-8">
      <div className="flex justify-between mb-1 items-center">
        <h2 className="font-bold text-lg">Rental Info</h2>
        <h4 className="text-secondary-300">Step 2 of 4</h4>
      </div>
      <p className="text-secondary-300 mb-8">Please enter your billing info</p>
      <div className="flex items-center mb-4 gap-x-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse ring-4 ring-[#C3D1F9]" />
        <h2 className="font-semibold">Pick - Up</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {inputsDataPickUp.map((data) => {
          if (data.name === "date" || data.name === "d-date") {
            return <Date key={data.name} register={register} {...data} />;
          }
          if (data.name === "time" || data.name === "d-time") {
            return <Time key={data.name} register={register} {...data} />;
          }
          return <Select key={data.name} {...data} register={register} />;
        })}
      </div>
      <div className="flex items-center mb-8 gap-x-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse ring-4 ring-[#C3D1F9]" />
        <h2 className="font-semibold">Drop - Off</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {inputsDataDropOff.map((data) => {
          if (data.name === "date" || data.name === "d-date") {
            return <Date key={data.name} register={register} {...data} />;
          }
          if (data.name === "time" || data.name === "d-time") {
            return <Time key={data.name} register={register} {...data} />;
          }
          return <Select key={data.name} {...data} register={register} />;
        })}
      </div>
    </div>
  );
};

export default RentalInfo;
