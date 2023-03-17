"use client";

import { useQuery } from "react-query";

export const useAllCars = () => {
  return useQuery(["all-cars"], () =>
    fetch("http://localhost:7000/all-cars").then((res) => res.json())
  );
};
