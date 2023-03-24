import { TPopularCar } from "@/public/type";
import classNames from "classnames";
import Link from "next/link";
import CarItem from "./car-item";
import Spinner from "./ui/spinner";

const CarRow = ({
  rowTitle,
  data,
  className,
  mobileView,
  isLoading,
}: {
  rowTitle?: string;
  data: TPopularCar[];
  className?: string;
  mobileView?: boolean;
  isLoading?: boolean;
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
      <div className="flex justify-center items-center">
        {isLoading && <Spinner />}
      </div>
      {!isLoading && (
        <ul
          className={classNames(
            "mb-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 gap-x-8 overflow-scroll scroll-hide",
            mobileView ? "grid grid-cols-1" : "",
            className
          )}
        >
          {data?.map((item: TPopularCar) => (
            <CarItem key={item.id} data={item} />
          ))}
        </ul>
      )}
    </div>
  );
};
export default CarRow;
