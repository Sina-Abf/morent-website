import { FilledStarIcon, StarIcon } from "@/app/icons";

const useStarsCreate = (starsCount: number) => {
  const starsArr = [];
  // this fills rated stars
  for (let i = 0; i < starsCount; i++) {
    starsArr.push(<FilledStarIcon key={i} />);
  }
  // this loop fills not filled stars
  for (let i = starsArr.length; i < 5; i++) {
    starsArr.push(<StarIcon key={i + 10} />);
  }
  // this sorts them as their key
  starsArr.sort((a: any, b: any) => {
    return a.key - b.key;
  });
  return starsArr;
};
export default useStarsCreate;
