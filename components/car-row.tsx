import { TPopularCar } from "@/public/data";
import classNames from "classnames";
import CarItem from "./car-item";

const CarRow = ({
  rowTitle,
  data,
}: {
  rowTitle: string;
  data: TPopularCar[];
}) => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h2 className="ml-4 mb-6 font-semibold text-secondary-300">
          {rowTitle}
        </h2>
        <h2 className="text-primary font-semibold mr-5 cursor-pointer">
          View All
        </h2>
      </div>
      <ul
        className={classNames(
          "mb-12 md:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 flex gap-x-8 overflow-scroll scroll-hide",
          rowTitle === "Recomendation Car" ? "grid grid-cols-1" : ""
        )}
      >
        {data?.map((item: TPopularCar) => (
          <CarItem key={item.name} data={item} />
        ))}
      </ul>
    </div>
  );
};
export default CarRow;
