import popularCar1 from "./images/popular-cars/car1.png";
import popularCar2 from "./images/popular-cars/car2.png";
import popularCar3 from "./images/popular-cars/car3.png";

export interface TPopularCar {
  name: string;
  category: string;
  image: HTMLImageElement;
  gas: string;
  gear: string;
  capacity: string;
  price: number;
  discount?: string;
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
    discount: "100",
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
