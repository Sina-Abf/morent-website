"use client";

import { GasIcon, Heart, PeopleIcon, SteerWheelIcon } from "@/icons";
import { TPopularCar } from "@/public/data";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

const CarItem = ({ data }: { data: TPopularCar }) => {
  const [heartFilled, setHeartFilled] = useState(false);
  return (
    <li className="bg-white p-4 w-full rounded-md">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="font-bold text-lg">Koengisegg</h2>
          <p className="text-xs text-secondary-300">Sport</p>
        </div>
        <div onClick={() => setHeartFilled((prev) => !prev)}>
          <Heart
            className={classNames(
              "stroke stroke-secondary-300",
              heartFilled && "fill-[#ED3F3F] stroke-[#ED3F3F]"
            )}
          />
        </div>
      </div>
      <div className="flex justify-center mb-12">
        <Image width={250} height={250} src={data.image} alt={data.name} />
      </div>
      <div className="flex justify-between p-1 mb-4 text-xs md:text-base">
        <div className="flex gap-x-1 items-center">
          <GasIcon />
          <p className="text-secondary-300">{data.gas}</p>
        </div>
        <div className="flex gap-x-1 items-center">
          <SteerWheelIcon />
          <p className="text-secondary-300">{data.gear}</p>
        </div>
        <div className="flex gap-x-1 items-center">
          <PeopleIcon />
          <p className="text-secondary-300">{data.capacity}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-1">
        <div className="flex items-center">
          <h2 className="font-bold text-lg">${data.price.toFixed(2)}/ </h2>
          <p className="text-secondary-300 font-semibold">day</p>
        </div>
        <button className="bg-primary px-4 py-2 rounded-md text-white font-semibold min-w-fit mx-4 md:mx-0">
          Rent Now
        </button>
      </div>
    </li>
  );
};
export default CarItem;
