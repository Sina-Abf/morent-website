import { TPopularCar } from "@/public/type";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { create } from "zustand";

export const useCarsStore = create((set) => ({
  cars: [],
  originalCars: [],
  selectedData: [],
  heartFilled: false,
  filtersOpen: false,

  setHeartFilled: (id: number) => {
    set((state: any) => ({
      cars: state.cars.map((car: TPopularCar) =>
        car.id === id ? { ...car, heart_filled: !car.heart_filled } : car
      ),
    }));
  },

  setFiltersOpen: () => {
    set((state: any) => ({
      filtersOpen: !state.filtersOpen,
    }));
  },

  allCarsSet: (data: TPopularCar[]) => {
    set({ cars: data, originalCars: data });
  },

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

// Zustand dev tools
if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", useCarsStore);
}
