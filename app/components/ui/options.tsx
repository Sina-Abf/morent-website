import { ChevronDownIcon } from "@/app/icons";
import classNames from "classnames";

const Options = ({
  title,
  className,
}: {
  title: string;
  className?: string;
}) => {
  const data = [
    {
      title: "Locations",
      subtitle: "Select your city",
      id: 1,
    },
    {
      title: "Date",
      subtitle: "Select your date",
      id: 2,
    },
    {
      title: "Time",
      subtitle: "Select your time",
      id: 3,
    },
  ];

  return (
    <div className={classNames("bg-white p-6 w-full rounded-md", className)}>
      <div className="flex items-center ml-1 mb-2 gap-x-3">
        <div className="w-2 h-2 rounded-full bg-primary animate-pulse ring-4 ring-[#C3D1F9]" />
        <h2 className="font-semibold">{title}</h2>
      </div>
      <div className="flex justify-between [&_p]:text-secondary-300 [&_p]:md:text-sm [&_p]:text-xs [&_h2]:text-sm [&_h2]:font-bold [&_h2]:md:text-lg [&_h2]:mb-2">
        {data.map((item, index) => (
          <>
            <div key={item.id} className="w-full">
              <h2>{item.title}</h2>
              <div className="flex items-center justify-between">
                <p>{item.subtitle}</p>
                <ChevronDownIcon className="stroke-secondary-300" />
              </div>
            </div>
            {index !== 2 && (
              <div className="w-0.5 h-14 bg-secondary-300/40 mx-6" />
            )}
          </>
        ))}
      </div>
    </div>
  );
};
export default Options;
