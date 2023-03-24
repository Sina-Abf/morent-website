"use client";

import { http } from "@/utils/http";
import { TPopularCar } from "@/public/type";
import { useCarsStore } from "@/store/store";
import { useEffect } from "react";
import { useQuery } from "react-query";

export const useAllCars = () => {
  const carsSetter = useCarsStore((state: any) => state.allCarsSet);

  const { data, isSuccess, isLoading } = useQuery("cars", async () => {
    const response = await http.get<TPopularCar[]>("/cars");
    return response.data;
  });

  useEffect(() => {
    carsSetter(data);
  }, [data]);

  return { data: data ?? [], isSuccess, isLoading };
};
