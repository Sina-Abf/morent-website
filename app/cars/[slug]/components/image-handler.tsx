'use client';

import Image from 'next/image';
import { MouseEvent, useState } from 'react';

type Props = {
  imageOne: string;
  imageTwo: string;
  imageThree: string;
  name: string;
};

const ImageHandler: React.FC<Props> = ({
  imageOne,
  imageTwo,
  imageThree,
  name,
}) => {
  const imageClickHandler = (event: MouseEvent<HTMLElement>) => {
    const selectedImageSrc = event.currentTarget.dataset.src;
    if (selectedImageSrc) setSelectedImage(selectedImageSrc);
  };

  const [selectedImage, setSelectedImage] = useState<string>(imageOne);

  return (
    <div className="">
      <div className="mb-4 h-auto">
        <Image
          className="rounded-xl"
          src={selectedImage}
          alt={name}
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="flex justify-between p-1 max-w-md gap-x-4">
        <Image
          className="rounded-xl sm:w-1/4 cursor-pointer"
          src={imageOne}
          data-src={imageOne}
          onClick={imageClickHandler}
          alt={name}
          width={80}
          height={80}
        />
        <Image
          className="rounded-xl sm:w-1/4 cursor-pointer"
          src={imageTwo}
          data-src={imageTwo}
          onClick={imageClickHandler}
          alt={name}
          width={80}
          height={80}
        />
        <Image
          className="rounded-xl sm:w-1/4 cursor-pointer"
          src={imageThree}
          data-src={imageThree}
          onClick={imageClickHandler}
          alt={name}
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};
export default ImageHandler;
