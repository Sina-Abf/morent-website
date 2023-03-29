import Button from "@/app/components/ui/button";
import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./form";
import Checkbox from "./ui/checkbox";
import Input from "./ui/input";

interface InputData {
  value: string;
  name: keyof Inputs;
}

const inputsData: InputData[] = [
  {
    value:
      "I agree with sending an Marketing and newsletter emails. No spam, promissed!",
    name: "firstcheck",
  },
  {
    value: "I agree with our terms and conditions and privacy policy!",
    name: "secondcheck",
  },
];

const Confirmation = ({ register }: { register: UseFormRegister<Inputs> }) => {
  return (
    <div className="p-4 bg-white rounded-md mb-8">
      <div className="flex justify-between mb-1 items-center">
        <h2 className="font-bold text-lg">Confirmation</h2>
        <h4 className="text-secondary-300">Step 4 of 4</h4>
      </div>
      <p className="text-secondary-300 max-w-xs mb-6">
        We are getting to the end. Just few clicks and your rental is ready!
      </p>
      <ul className="space-y-4 mb-4">
        {inputsData.map((data) => (
          <Checkbox key={data.name} {...data} register={register} />
        ))}
      </ul>
      <Button>Rental Now</Button>
    </div>
  );
};

export default Confirmation;
