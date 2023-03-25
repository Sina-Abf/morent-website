import Options from "@/app/components/ui/options";
import { UpDownArrowIcon } from "@/app/icons";
import classNames from "classnames";

const OptionsFull = ({ className }: { className?: string }) => {
  return (
    <div
      className={classNames(
        "flex flex-col md:flex-row justify-between items-center",
        className
      )}
    >
      <Options title="Pick - Up" />
      <div className="flex items-center mx-4 -my-4 z-10">
        <button className="bg-primary p-4 rounded-lg shadow-xl">
          <UpDownArrowIcon />
        </button>
      </div>
      <Options title="Drop - Off" />
    </div>
  );
};
export default OptionsFull;
