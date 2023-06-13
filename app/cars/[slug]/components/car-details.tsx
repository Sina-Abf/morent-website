import { Heart } from '@/app/icons';
import { TPopularCar } from '@/public/type';
import classNames from 'classnames';
import { useState } from 'react';
import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from 'react-query';
import CarDetailsInfo from './car-details-info';
import useStarsCreate from '@/hooks/use-stars-create';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useCartStore } from '@/store/cart';
import Link from 'next/link';

type TCarDetails = {
  name: string;
  stars_count: number;
  reviews: number;
  description: string;
  category: string;
  capacity: string;
  gear: string;
  gas: string;
  price: number;
  discount?: number;
  id: number;
  heart_filled?: boolean;
  isLoading: boolean;
  reviews_describe: {
    username: string;
    position: string;
    comment: string;
    created_at: string;
    stars_count: number;
    profile_image: string;
  }[];
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<TPopularCar, unknown>>;
};

const CarDetails: React.FC<TCarDetails> = ({
  name,
  stars_count,
  reviews,
  description,
  price,
  capacity,
  gas,
  gear,
  category,
  discount,
  id,
  isLoading,
}) => {
  const cartAdder = useCartStore((state: any) => state.carAdder);

  const clickHandler = () => {
    cartAdder(id);
  };

  const starsArr = useStarsCreate(stars_count);
  const [heartFilled, setHeartFilled] = useState(false);
  return (
    <>
      <div className="bg-white mb-4 rounded-xl p-6 md:p-12 h-fit w-full">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold md:text-2xl mb-2">
              {name || <Skeleton />}
            </h2>
            <div className="flex items-center gap-x-2 mb-6">
              <div className="flex gap-x-1">{starsArr.map((star) => star)}</div>
              <span className="text-secondary-300 text-sm md:text-base font-semibold">
                {reviews || <Skeleton />}+ Reviewer
              </span>
            </div>
            <p className="text-secondary-300 text-sm min-w-full max-w-sm mb-4">
              {description || <Skeleton count={3} />}
            </p>
            <div className="grid grid-cols-2 mb-8 gap-16 max-w-sm">
              <CarDetailsInfo
                capacity={capacity}
                category={category}
                gas={gas}
                gear={gear}
                isLoading={isLoading}
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="flex items-end">
                  <h2 className="text-lg font-bold">
                    $
                    {price?.toFixed(2) || (
                      <Skeleton width={50} className="ml-2" />
                    )}
                    /
                  </h2>
                  {(isLoading && <Skeleton />) || (
                    <span className="text-secondary-300 text-xs mb-1">
                      days
                    </span>
                  )}
                </div>
                {discount && (
                  <h3 className="text-sm text-secondary-300 line-through">
                    $
                    {discount?.toFixed(2) || (
                      <Skeleton width={50} className="ml-4" />
                    )}
                  </h3>
                )}
              </div>
              <Link
                onClick={clickHandler}
                href="/cart"
                className="bg-primary px-4 py-3 rounded-md text-white font-semibold min-w-fit mx-4 md:mx-0"
              >
                Rent Now
              </Link>
            </div>
          </div>
          <div
            className="cursor-pointer h-fit"
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
        </div>
      </div>
    </>
  );
};
export default CarDetails;
