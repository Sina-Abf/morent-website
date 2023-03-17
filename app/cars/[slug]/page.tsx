"use client";

const CarItem = ({ params }: { params: { slug: string } }) => {
  return <div>{params.slug}</div>;
};
export default CarItem;
