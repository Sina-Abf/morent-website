import { TPopularCar } from "@/public/data";
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
      <ul className="flex justify-between gap-x-8 overflow-scroll scroll-hide">
        {data?.map((item: TPopularCar) => (
          <CarItem data={item} />
        ))}
      </ul>
    </div>
  );
};
export default CarRow;
