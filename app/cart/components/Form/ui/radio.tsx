import Image from "next/image";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import Date from "./date";
import Input from "./input";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  value: string;
  image: string;
  data?: {
    label: string;
    name: any;
    placeholder: string;
  }[];
};

function Radio<T extends FieldValues>({
  label,
  name,
  register,
  value,
  data,
  image,
}: InputProps<T>) {
  return (
    <li className=" bg-background rounded-lg p-4">
      <div className="flex justify-between items-center mb-8 h-full">
        <div className="flex items-center gap-x-4">
          <input
            className="focus:ring-0 focus:ring-offset-0"
            type="radio"
            id={value}
            {...register(name)}
            name={name}
            value={value}
          />
          <label className="font-semibold mb-1" htmlFor={value}>
            {label}
          </label>
        </div>
        <div>
          <Image src={image} alt={name} width={80} height={80} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data?.map((input) => {
          if (input.name === "expirationDate")
            return (
              <Date
                classname="bg-white"
                register={register}
                {...input}
                key={input.name}
              />
            );
          return (
            <Input
              classname="bg-white"
              key={input.name}
              {...input}
              register={register}
            />
          );
        })}
      </div>
    </li>
  );
}

export default Radio;
