import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  options?: {
    option: string;
  }[];
  register: UseFormRegister<T>;
};

function Select<T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
  options,
}: InputProps<T>) {
  return (
    <div>
      <label className="font-semibold mb-1 block" htmlFor={name}>
        {label}
      </label>
      <select
        placeholder={placeholder}
        className="bg-background placeholder:text-secondary-300 w-full placeholder:text-sm border-none focus:ring-2 py-3 px-4 rounded-lg mb-4"
        id={name}
        {...register(name)}
        name={name}
      >
        {options?.map((option) => (
          <option value={option.option}>{option.option}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
