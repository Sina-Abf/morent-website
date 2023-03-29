import { UseFormRegister } from "react-hook-form";
import { Inputs } from "./form";
import Radio from "./ui/radio";

interface InputData {
  label: string;
  name: keyof Inputs;
  image: string;
  data?: {
    label: string;
    name: string;
    placeholder: string;
  }[];
  value: string;
}

const inputsData: InputData[] = [
  {
    label: "Credit Card",
    name: "credit-method",
    image: "/images/logo/Visa.png",
    data: [
      {
        label: "Card Number",
        name: "card-number",
        placeholder: "Card number",
      },
      {
        label: "Expration Date",
        name: "expirationDate",
        placeholder: "DD / MM / YY",
      },
      {
        label: "Card Holder",
        name: "card-holder",
        placeholder: "Card holder",
      },
      {
        label: "CVC",
        name: "cvc",
        placeholder: "CVC",
      },
    ],
    value: "credit-card",
  },
  {
    label: "PayPal",
    name: "credit-method",
    image: "/images/logo/PayPal.png",
    value: "paypal",
  },
  {
    label: "Bitcoin",
    name: "credit-method",
    image: "/images/logo/Bitcoin.png",
    value: "bitcoin",
  },

  // add additional inputs as needed
];

const PaymentMethod = ({ register }: { register: UseFormRegister<Inputs> }) => {
  return (
    <div className="p-4 bg-white rounded-md mb-8">
      <div className="flex justify-between mb-1 items-center">
        <h2 className="font-bold text-lg">Billing Info</h2>
        <h4 className="text-secondary-300">Step 3 of 4</h4>
      </div>
      <p className="text-secondary-300 mb-6">Please enter your billing info</p>
      <ul className="space-y-4">
        {inputsData.map((data) => {
          return (
            <>
              <Radio key={data.label} {...data} register={register} />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default PaymentMethod;
