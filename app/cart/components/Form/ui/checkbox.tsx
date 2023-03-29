import classNames from "classnames";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  value: string;
  name: Path<T>;
  register: UseFormRegister<T>;
};

function Checkbox<T extends FieldValues>({
  value,
  name,
  register,
}: InputProps<T>) {
  return (
    <li className="p-4 flex rounded-lg items-center gap-x-8 bg-background">
      <input
        className="border-2 border-secondary-300 focus:ring-0 rounded-sm"
        type="checkbox"
        id={name}
        {...register(name)}
        name={name}
      />
      <label
        className="font-semibold max-w-xs sm:max-w-md mb-1 text-sm md:text-base"
        htmlFor={name}
      >
        {value}
      </label>
    </li>
  );
}

export default Checkbox;
