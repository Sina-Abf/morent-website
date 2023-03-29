import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "./form";
import Input from "./ui/input";

interface InputData {
  label: string;
  name: keyof Inputs;
  placeholder: string;
}

const inputsData: InputData[] = [
  {
    label: "Name",
    name: "firstname",
    placeholder: "Your name",
  },
  {
    label: "Address",
    name: "address",
    placeholder: "Town or city",
  },
  { label: "Phone", name: "phone", placeholder: "Address" },
  { label: "Town / City", name: "town", placeholder: "Town or City" },
  // add additional inputs as needed
];

const BillingInfo = ({ register }: { register: UseFormRegister<Inputs> }) => {
  return (
    <div className="p-4 bg-white rounded-md mb-8">
      <div className="flex justify-between mb-1 items-center">
        <h2 className="font-bold text-lg">Billing Info</h2>
        <h4 className="text-secondary-300">Step 1 of 4</h4>
      </div>
      <p className="text-secondary-300 mb-6">Please enter your billing info</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {inputsData.map((data) => (
          <Input key={data.name} {...data} register={register} />
        ))}
      </div>
    </div>
  );
};

export default BillingInfo;
