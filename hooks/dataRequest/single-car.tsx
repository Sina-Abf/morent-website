"use client";

import { http } from "@/utils/http";
import { TPopularCar } from "@/public/type";
import { useQuery } from "react-query";

export const useSingleCarData = (id?: string) => {
  const { data, isLoading, refetch } = useQuery<TPopularCar>(
    "single-car",
    async () => {
      const response = await http.get<TPopularCar>(`/cars/${id}`);
      return response.data;
    }
  );
  return { data: (data as TPopularCar) ?? [], isLoading, refetch };
};
