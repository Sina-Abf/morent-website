"use client";

import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import BillingInfo from "./billing-info";

export type Inputs = {
  example: string;
  exampleRequired: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className="col-start-2" onSubmit={handleSubmit(onSubmit)}>
      <BillingInfo />
    </form>
  );
};
export default Form;
