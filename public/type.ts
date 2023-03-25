export interface TPopularCar {
  name: string;
  category: string;
  image: string;
  detailImage1: string;
  detailImage2: string;
  detailImage3: string;
  gas: string;
  gear: string;
  capacity: string;
  description: string;
  reviews: number;
  reviews_describe: {
    username: string;
    position: string;
    comment: string;
    created_at: string;
    stars_count: number;
    profile_image: string;
  }[];
  stars_count: number;
  price: number;
  discount?: number;
  recommended?: boolean;
  id: number;
  heart_filled?: boolean;
  popular_car?: boolean;
}
