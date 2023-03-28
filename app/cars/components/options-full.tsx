import Button from "@/app/components/ui/button";
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
        <Button intent="shadowed" size="big">
          <UpDownArrowIcon />
        </Button>
      </div>
      <Options title="Drop - Off" />
    </div>
  );
};
export default OptionsFull;
