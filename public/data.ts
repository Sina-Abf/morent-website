import { StaticImageData } from "next/image";
import popularCar1 from "./images/popular-cars/car1.png";
import popularCar2 from "./images/popular-cars/car2.png";
import popularCar3 from "./images/popular-cars/car3.png";

import recCar1 from "./images/recomendation-cars/car-1.png";
import recCar2 from "./images/recomendation-cars/car-2.png";
import recCar3 from "./images/recomendation-cars/car-3.png";
import recCar4 from "./images/recomendation-cars/car-4.png";
export interface TPopularCar {
  name: string;
  category: string;
  image: StaticImageData;
  gas: string;
  gear: string;
  capacity: string;
  price: number;
  discount?: number;
  recommended?: boolean;
}

export const popularCar = [
  {
    name: "Koenigsegg",
    category: "Sport",
    image: popularCar1,
    gas: "80L",
    gear: "Manual",
    capacity: "2 People",
    price: 99,
  },
  {
    name: "Nissan GT - R",
    category: "Sport",
    image: popularCar2,
    gas: "90L",
    gear: "Manual",
    capacity: "2 People",
    price: 80,
    discount: 100,
  },
  {
    name: "Rolls - Royce",
    category: "Sedan",
    image: popularCar3,
    gas: "70L",
    gear: "Manual",
    capacity: "4 People",
    price: 96,
  },
  {
    name: "Nissan GT - R",
    category: "Sport",
    image: popularCar2,
    gas: "90L",
    gear: "Manual",
    capacity: "2 People",
    price: 99,
  },
];
export const recommendationCar = [
  {
    name: "All New Rush",
    category: "SUV",
    image: recCar1,
    gas: "70L",
    gear: "Manual",
    capacity: "6 People",
    price: 72,
    discount: 80,
    recommended: true,
  },
  {
    name: "CR  - V",
    category: "SUV",
    image: recCar2,
    gas: "80L",
    gear: "Manual",
    capacity: "6 People",
    price: 80,
    recommended: true,
  },
  {
    name: "All New Terios",
    category: "SUV",
    image: recCar3,
    gas: "90L",
    gear: "Manual",
    capacity: "6 People",
    price: 74,
    recommended: true,
  },
  {
    name: "CR  - V",
    category: "SUV",
    image: recCar4,
    gas: "80L",
    gear: "Manual",
    capacity: "6 People",
    price: 80,
    recommended: true,
  },
  {
    name: "All New Rush",
    category: "SUV",
    image: recCar1,
    gas: "70L",
    gear: "Manual",
    capacity: "6 People",
    price: 72,
    discount: 80,
    recommended: true,
  },
  {
    name: "CR  - V",
    category: "SUV",
    image: recCar2,
    gas: "80L",
    gear: "Manual",
    capacity: "6 People",
    price: 80,
    recommended: true,
  },
  {
    name: "All New Terios",
    category: "SUV",
    image: recCar3,
    gas: "90L",
    gear: "Manual",
    capacity: "6 People",
    price: 74,
    recommended: true,
  },
  {
    name: "CR  - V",
    category: "SUV",
    image: recCar4,
    gas: "80L",
    gear: "Manual",
    capacity: "6 People",
    price: 80,
    recommended: true,
  },
];
