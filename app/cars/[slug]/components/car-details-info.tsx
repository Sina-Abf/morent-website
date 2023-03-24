const CarDetailsInfo = ({
  category,
  capacity,
  gear,
  gas,
}: {
  category: string;
  capacity: string;
  gear: string;
  gas: string;
}) => {
  return (
    <div className="flex-col flex sm:flex-row gap-x-4">
      <div className="flex flex-col justify-center [&_h2]:font-semibold">
        <div className="flex justify-between gap-x-4 whitespace-nowrap">
          <span className="text-secondary-300">Type Car</span>
          <h2>{category}</h2>
        </div>
        <div className="flex justify-between gap-x-4 whitespace-nowrap">
          <span className="text-secondary-300">Capacity</span>
          <h2>{capacity}</h2>
        </div>
      </div>
      <div className="flex flex-col justify-center [&_h2]:font-semibold">
        <div className="flex justify-between gap-x-4 whitespace-nowrap">
          <span className="text-secondary-300">Steering</span>
          <h2>{gear}</h2>
        </div>
        <div className="flex justify-between gap-x-4 whitespace-nowrap">
          <span className="text-secondary-300">Gasoline</span>
          <h2>{gas}</h2>
        </div>
      </div>
    </div>
  );
};
export default CarDetailsInfo;
