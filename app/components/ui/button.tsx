import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";

const button = cva("rounded-md font-semibold", {
  variants: {
    intent: {
      default:
        "bg-primary hover:bg-primary/90 transition-colors duration-300 text-white",
      shadowed: "shadow-xl bg-primary hover:bg-primary/80 text-white p-4",
      "no-bg": "text-secondary-500",
    },
    size: {
      normal: "py-2 px-4",
      big: "p-4",
    },
  },
  defaultVariants: {
    intent: "default",
    size: "normal",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  children: React.ReactNode;
}

const Button = ({ children, intent, size }: ButtonProps) => {
  return <button className={button({ intent, size })}>{children}</button>;
};
export default Button;
