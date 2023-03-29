"use client";

import Button from "@/app/components/ui/button";
import useStarsCreate from "@/hooks/use-stars-create";
import { TPopularCar } from "@/public/type";
import { useCartStore } from "@/store/cart";
import Image from "next/image";

const Summary = () => {
  const cars = useCartStore((state: any) => state.cars);

  const totalPrice = cars?.reduce((prev: any, cur: any) => {
    return cur.price + prev;
  }, 0);

  return (
    <div className="bg-white rounded-lg p-4 w-full h-fit">
      <h2 className="font-bold mb-2">Rental Summary</h2>
      <p className="text-secondary-300 mb-4 text-xs">
        Prices may change depending on the length of the rental and the price of
        your rental car.
      </p>
      <ul className="mb-8 flex flex-col gap-y-10">
        {cars?.map((car: TPopularCar) => (
          <li
            key={car.id}
            className="pb-4 border-b p-4 border-secondary-300/20"
          >
            <div className="flex gap-x-4 items-center ">
              <div>
                <Image
                  src={car.image}
                  alt={car.name}
                  width={125}
                  height={125}
                />
              </div>
              <div className="mb-8">
                <h1 className="text-xl font-bold mb-4">{car.name}</h1>
                <div className="flex gap-x-1">
                  {useStarsCreate(car.stars_count).map((star) => star)}
                </div>
                <h3>{car.reviews}+ Reviewer</h3>
              </div>
            </div>
            <div className="flex justify-between w-full">
              <h3 className="text-secondary-300 text-sm">Subtotal</h3>
              <span className="text-secondary-500 font-semibold text-lg">
                ${car?.price?.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between mb-4">
              <h3 className="text-secondary-300 text-sm">Tax</h3>
              <span className="text-secondary-500 font-semibold text-lg">
                ${0}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between mb-4">
        <h3 className="text-secondary-300 text-sm">Subtotal</h3>
        <span className="text-secondary-500 font-semibold text-lg">
          ${totalPrice.toFixed(2)}
        </span>
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-background rounded-lg mb-4 flex p-0.5 justify-between pr-4 overflow-hidden"
      >
        <input
          className="focus:border-none border-none focus:ring-0 bg-background placeholder:text-secondary-300"
          type="text"
          placeholder="Apply Promo code"
        />
        <Button intent="no-bg" className="text-secondary-500 font-semibold">
          Apply now
        </Button>
      </form>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-secondary-500 font-bold text-lg">
            Total Rental Price
          </h2>
          <p className="text-sm text-secondary-300">Overall price rental</p>
        </div>
        <div>
          <span className="font-bold text-lg">${totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};
export default Summary;
