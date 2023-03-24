"use client";

import { useSingleCarData } from "@/hooks/dataRequest/single-car";
import CarDetails from "./components/car-details";
import ImageHandler from "./components/image-handler";

const CarItem = ({ params }: { params: { slug: string } }) => {
  const id = params.slug;
  const { data, isLoading, refetch } = useSingleCarData(id);

  return (
    <section className="container max-w-screen-xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center sm:place-items-start">
      {!isLoading && (
        <ImageHandler
          imageOne={data?.detailImage1}
          imageTwo={data?.detailImage2}
          imageThree={data?.detailImage3}
          name={data.name}
        />
      )}
      <CarDetails {...data} refetch={refetch} />
    </section>
  );
};
export default CarItem;
