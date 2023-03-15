import { allCars, TPopularCar } from "@/public/data";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export const useCarsStore = create((set) => ({
  cars: allCars as TPopularCar[],
  originalCars: allCars as TPopularCar[],

  selectedData: [],

  // this part checks if selectedData array is filled with data, if so it removes all, and if not new data will be added
  toggleCategory: (category: string) =>
    set((state: any) => ({
      selectedData: state.selectedData.includes(category)
        ? state.selectedData.filter(
            (
              item: TPopularCar //@ts-ignore
            ) => item !== category
          )
        : [...state.selectedData, category],
    })),

  // this part filters the data based on the selected data values
  filterCars: (dataName: string) =>
    set((state: any) => ({
      cars: state.selectedData.length
        ? state.originalCars.filter((item: TPopularCar) =>
            state.selectedData.includes(
              // @ts-ignore
              item[dataName]
            )
          )
        : state.originalCars,
    })),
}));

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useCarsStore);
}
