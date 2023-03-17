"use client";

import { http } from "@/http";
import { TPopularCar } from "@/public/data";
import { useQuery } from "react-query";

export const usePopularCarsData = () => {
  const { data, isLoading } = useQuery("popular-cars", async () => {
    const response = await http.get<TPopularCar[]>("/popular-cars");
    return response.data;
  });
  return { data: data ?? [], isLoading };
};
