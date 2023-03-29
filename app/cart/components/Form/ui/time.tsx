import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  label: string;
  name: Path<T>;
  placeholder: string;
  register: UseFormRegister<T>;
};

function Time<T extends FieldValues>({
  label,
  name,
  placeholder,
  register,
}: InputProps<T>) {
  return (
    <div>
      <label className="font-semibold mb-1 block" htmlFor={name}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        className="bg-background placeholder:text-secondary-300 w-full placeholder:text-sm border-none focus:ring-2 py-3 px-4 rounded-lg mb-4 form-"
        type="time"
        id={name}
        {...register(name)}
        name={name}
      />
    </div>
  );
}

export default Time;
