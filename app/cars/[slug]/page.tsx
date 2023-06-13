'use client';

import CarRow from '@/app/components/car-row';
import { useAllCars } from '@/hooks/dataRequest/all-cars';
import { useSingleCarData } from '@/hooks/dataRequest/single-car';
import CarDetails from './components/car-details';
import CarDetailsReviews from './components/car-details-reviews';
import ImageHandler from './components/image-handler';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const CarItem = ({ params }: { params: { slug: string } }) => {
  const id = params.slug;
  const { data, isLoading, refetch } = useSingleCarData(id);
  const { data: AllCarsData } = useAllCars();

  const recommendedCars = AllCarsData.filter((car) => car.recommended).slice(
    0,
    4
  );
  const recentCars = AllCarsData.slice(3, 7);
  return (
    <section className="container max-w-screen-xl mx-auto ">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 place-items-center sm:place-items-start">
        {isLoading && <Skeleton width={500} height={300} count={1} />}
        {!isLoading && (
          <ImageHandler
            imageOne={data?.detailImage1}
            imageTwo={data?.detailImage2}
            imageThree={data?.detailImage3}
            name={data.name}
          />
        )}
        <CarDetails isLoading={isLoading} {...data} refetch={refetch} />
      </div>
      <CarDetailsReviews reviews={data.reviews_describe} />
      <div className="px-4">
        <CarRow data={recentCars} rowTitle="Recent Car" />
        <CarRow data={recommendedCars} rowTitle="Recomendation Car" />
      </div>
    </section>
  );
};
export default CarItem;
