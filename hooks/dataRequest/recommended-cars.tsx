"use client";

import { useQuery } from "react-query";

export const useRecommendedCarsData = () => {
  return useQuery(["recommended-cars"], () =>
    fetch("http://localhost:7000/recommended-cars").then((res) => res.json())
  );
};
