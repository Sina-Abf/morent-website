"use client";

import { GasIcon, Heart, PeopleIcon, SteerWheelIcon } from "@/app/icons";
import { TPopularCar } from "@/public/type";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const CarItem = ({ data }: { data: TPopularCar }) => {
  const [heartFilled, setHeartFilled] = useState(false);

  return (
    <li className="bg-white p-4 w-full rounded-md max-w-md mx-auto">
      <div className="flex justify-between mb-8">
        <div>
          <h2 className="font-bold text-lg">{data.name}</h2>
          <p className="text-xs text-secondary-300">{data.category}</p>
        </div>
        <div
          className="cursor-pointer h-fit"
          onClick={() => setHeartFilled((prev) => !prev)}
        >
          <Heart
            className={classNames(
              heartFilled
                ? "fill-[#ED3F3F] stroke-[#ED3F3F]"
                : "stroke stroke-secondary-300"
            )}
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image width={250} height={250} src={data.image} alt={data.name} />
      </div>
      <div className="flex justify-center gap-x-8 items-center p-1 mt-4 mb-4 text-xs  [&_p]:text-secondary-300 [&_div]:flex [&_div]:gap-x-1 [&_div]:items-center">
        <div>
          <GasIcon />
          <p>{data.gas}</p>
        </div>
        <div>
          <SteerWheelIcon />
          <p>{data.gear}</p>
        </div>
        <div>
          <PeopleIcon />
          <p>{data.capacity}</p>
        </div>
      </div>
      <div className="flex items-center justify-between px-4 py-1">
        <div className="flex flex-col">
          <div className="flex items-center">
            <h2 className="font-bold text-lg">${data.price.toFixed(2)}/ </h2>
            <p className="text-secondary-300 font-semibold">day</p>
          </div>
          {data.discount && (
            <h2 className="text-secondary-300 font-semibold text-sm line-through">
              ${data.discount.toFixed(2)}
            </h2>
          )}
        </div>
        <Link
          href={`cars/${data.id}`}
          className="bg-primary px-4 py-2 rounded-md text-white font-semibold min-w-fit mx-4 md:mx-0"
        >
          Rent Now
        </Link>
      </div>
    </li>
  );
};
export default CarItem;
