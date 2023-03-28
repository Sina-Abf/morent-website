import { create } from "zustand";
import { persist } from "zustand/middleware";
import { http } from "@/utils/http";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { TPopularCar } from "@/public/type";

export const useCartStore = create(
  persist(
    (set) => ({
      cars: [],

      carAdder: async (id: any) => {
        const response = await http.get(`/cars/${id}`);
        set((state: any) => ({
          cars: [response.data],
        }));
      },

      carRemover: (id: any) => {
        set((state: any) => ({
          cars: state.cars.filter((car: TPopularCar) => car.id !== id),
        }));
      },
    }),
    { name: "cart-store" }
  )
);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Cart", useCartStore);
}
