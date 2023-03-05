import { ChevronDownIcon } from "@/icons";
import classNames from "classnames";

const Options = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  return (
    <div className={classNames("bg-white p-6 w-full", className)}>
      <div className="flex items-center ml-1 mb-2 gap-x-2">
        <div className="w-2 h-2 rounded-full bg-primary ring-4 ring-[#C3D1F9]" />
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="flex justify-between [&_p]:text-secondary-300 [&_p]:md:text-sm [&_p]:text-xs [&_h2]:text-sm [&_h2]:font-bold [&_h2]:md:text-lg [&_h2]:mb-2">
        <div className="w-full">
          <h2>Locations</h2>
          <div className="flex items-center justify-between">
            <p>Select your city</p>
            <ChevronDownIcon />
          </div>
        </div>
        <div className="w-0.5 h-10 bg-secondary-300/40 mx-6" />
        <div className="w-full">
          <h2>Date</h2>
          <div className="flex items-center justify-between">
            <p>Select your date</p>
            <ChevronDownIcon />
          </div>
        </div>
        <div className="w-0.5 h-10 bg-secondary-300/40 mx-6" />
        <div className="w-full">
          <h2>Time</h2>
          <div className="flex items-center justify-between">
            <p>Select your time</p>
            <ChevronDownIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Options;
