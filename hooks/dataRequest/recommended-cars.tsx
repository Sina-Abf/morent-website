"use client";

import { http } from "@/http";
import { TPopularCar } from "@/public/data";
import { useQuery } from "react-query";

export const useRecommendedCarsData = () => {
  const { data, isLoading } = useQuery("recommended-cars", async () => {
    const response = await http.get<TPopularCar[]>("/recommended-cars");
    return response.data;
  });
  return { data: data ?? [], isLoading };
};
