import { allCars, TPopularCar } from "@/public/data";
import { create } from "zustand";

export const useCarsStore = create((set) => ({
  cars: allCars as TPopularCar[],
  originalCars: allCars as TPopularCar[],

  selectedCategories: [],

  toggleCategory: (category: string) =>
    set((state: any) => ({
      selectedCategories: state.selectedCategories.includes(category)
        ? state.selectedCategories.filter(
            (
              item: TPopularCar //@ts-ignore
            ) => item !== category
          )
        : [...state.selectedCategories, category],
    })),

  filterCars: () =>
    set((state: any) => ({
      cars: state.selectedCategories.length
        ? state.originalCars.filter((item: TPopularCar) =>
            state.selectedCategories.includes(item.category)
          )
        : state.originalCars,
    })),
}));
