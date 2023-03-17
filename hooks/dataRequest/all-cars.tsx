"use client";

import { http } from "@/http";
import { TPopularCar } from "@/public/data";
import { useCarsStore } from "@/store/store";
import { useEffect } from "react";
import { useQuery } from "react-query";

export const useAllCars = () => {
  const carsSetter = useCarsStore((state: any) => state.allCarsSet);

  const { data, isSuccess, isLoading } = useQuery("all-cars", async () => {
    const response = await http.get<TPopularCar[]>("/all-cars");
    return response.data;
  });

  useEffect(() => {
    carsSetter(data);
  }, [data]);

  return { data: data ?? [], isSuccess, isLoading };
};
