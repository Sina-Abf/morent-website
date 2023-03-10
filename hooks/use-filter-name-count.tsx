import { TPopularCar } from "@/public/data";

const useFilterNameCount = (data: TPopularCar[]) => {
  const categoryCounts: { [category: string]: number } = data
    .map((car: TPopularCar) => car.category)
    .reduce((acc: { [category: string]: number }, item: string) => {
      if (!acc[item]) {
        acc[item] = 1;
      } else {
        acc[item]++;
      }
      return acc;
    }, {});
  return categoryCounts;
};
export default useFilterNameCount;
