import { TPopularCar } from "@/public/data";

const useFilterNameCount = (data: TPopularCar[], name: string) => {
  const categoryCounts = data
    .map(
      (
        car: TPopularCar //@ts-ignore
      ) => car[name]
    )
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
