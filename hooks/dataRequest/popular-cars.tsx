"use client";

import { useQuery } from "react-query";

export const usePopularCarsData = () => {
  return useQuery(["popular-cars"], () =>
    fetch("http://localhost:7000/popular-cars").then((res) => res.json())
  );
};
