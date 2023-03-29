"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import BillingInfo from "./billing-info";
import Confirmation from "./confirmation";
import PaymentMethod from "./payment-method";
import RentalInfo from "./rental-info";

export type Inputs = {
  // Billing Info
  firstname: string;
  address: string;
  phone: string;
  town: string;
  // Rental Info
  locations: string;
  date: string;
  time: string;
  "d-locations": string;
  "d-date": string;
  "d-time": string;
  // Payment Methods
  "credit-method": "credit-card" | "bitcoin" | "paypal";
  "card-number"?: string;
  "expiration-date"?: string;
  "card-holder"?: string;
  CVC?: string;
  firstcheck: boolean;
  secondcheck: boolean;
};

const Form = () => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <form
      className="w-full h-full row-start-2 md:row-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <BillingInfo register={register} />
      <RentalInfo register={register} />
      <PaymentMethod register={register} />
      <Confirmation register={register} />
    </form>
  );
};
export default Form;
