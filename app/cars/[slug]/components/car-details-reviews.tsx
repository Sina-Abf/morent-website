import { ChevronDownIcon } from "@/app/icons";
import useStarsCreate from "@/hooks/use-stars-create";
import Image from "next/image";

const CarDetailsReviews = ({
  reviews,
}: {
  reviews: {
    username: string;
    position: string;
    comment: string;
    created_at: string;
    stars_count: number;
    profile_image: string;
  }[];
}) => {
  const reviewsCount = reviews?.length;

  return (
    <div className="px-4">
      <div className="bg-white mb-4 rounded-xl px-4 sm:p-6 sm:px-8  max-w-screen-xl">
        <div className="flex gap-x-3 mb-4 p-3">
          <h1 className="text-secondary-500 text-xl font-semibold">Reviews</h1>
          <div className="flex items-center bg-primary-500 py-1 rounded-md px-4 text-white font-semibold">
            <span className="">{reviewsCount}</span>
          </div>
        </div>
        {reviews?.map((review) => {
          const starsArr = useStarsCreate(review.stars_count);
          return (
            <>
              <div className="flex justify-between gap-x-16 mb-4 sm:mb-0 p-4 items-center">
                <div className="flex items-center w-full gap-x-2">
                  <div className="min-w-fit">
                    <Image
                      alt=""
                      src={review.profile_image}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div className="flex flex-col">
                    <h2 className="font-semibold">{review.username}</h2>
                    <p className="text-secondary-300 whitespace-nowrap text-xs sm:text-md font-medium">
                      {review.position}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <p className="text-secondary-300 mb-2 text-right whitespace-nowrap text-xs font-medium">
                    {review.created_at}
                  </p>
                  <div className="flex gap-x-1">
                    {starsArr.map((star) => star)}
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-secondary-300 lg:text-lg line-clamp-2 sm:line-clamp-none text-xs max-w-3xl">
                  {review.comment}
                </p>
              </div>
            </>
          );
        })}
        <div className="text-center my-6 sm:mb-2 sm:mt-3 flex justify-center items-center gap-x-1">
          <h4 className="text-secondary-300 text-sm">Show All</h4>
          <span className="stroke-secondary-300">
            <ChevronDownIcon className="text-secondary-300" />
          </span>
        </div>
      </div>
    </div>
  );
};
export default CarDetailsReviews;
