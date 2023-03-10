import { TPopularCar } from "@/public/data";
import classNames from "classnames";
import Link from "next/link";
import CarItem from "./car-item";

const CarRow = ({
  rowTitle,
  data,
  className,
  mobileView,
}: {
  rowTitle?: string;
  data: TPopularCar[];
  className?: string;
  mobileView?: boolean;
}) => {
  return (
    <div className="px-4 md:px-0">
      {rowTitle && (
        <div className="flex justify-between">
          <h2 className="ml-4 mb-6 font-semibold text-secondary-300">
            {rowTitle}
          </h2>
          <Link
            href="/cars"
            className="text-primary font-semibold mr-5 cursor-pointer"
          >
            View All
          </Link>
        </div>
      )}
      <ul
        className={classNames(
          "mb-12 md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 flex gap-x-8 overflow-scroll scroll-hide",
          mobileView ? "grid grid-cols-1" : "",
          className
        )}
      >
        {data?.map((item: TPopularCar) => (
          <CarItem key={item.id} data={item} />
        ))}
      </ul>
    </div>
  );
};
export default CarRow;
