'use client';

import { GasIcon, Heart, PeopleIcon, SteerWheelIcon } from '@/app/icons';
import { TPopularCar } from '@/public/type';
import { useCartStore } from '@/store/cart';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from './ui/button';

const CarItem = ({ data }: { data: TPopularCar }) => {
  const [heartFilled, setHeartFilled] = useState(false);

  const cartAdder = useCartStore((state: any) => state.carAdder);

  const clickHandler = () => {
    cartAdder(data.id);
  };
  return (
    <li className="bg-white p-4 w-full rounded-md max-w-md mx-auto relative">
      <Link href={`cars/${data.id}`}>
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="font-bold text-lg">{data.name}</h2>
            <p className="text-xs text-secondary-300">{data.category}</p>
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
            <p className="whitespace-nowrap">{data.capacity}</p>
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
            onClick={clickHandler}
            href="/cart"
            className="min-w-fit mx-4 md:mx-0 z-50"
          >
            <Button intent="default">Rent Now</Button>
          </Link>
        </div>
      </Link>
      <div
        className="cursor-pointer h-fit absolute top-3 right-4"
        onClick={() => setHeartFilled((prev) => !prev)}
      >
        <Heart
          className={classNames(
            heartFilled
              ? 'fill-[#ED3F3F] stroke-[#ED3F3F]'
              : 'stroke stroke-secondary-300'
          )}
        />
      </div>
    </li>
  );
};
export default CarItem;
