import { IUser } from "@/fetchers/user";
import { IShow } from "./show";

export interface IReview{
  comment: string;
  rating: number;
  show_id: string;
  id?: string;
  user?: IUser;
}

export interface IReviewList{
  reviews: IReview[];
  meta?: {
    pagination: {
      count: number;
      items: number;
      page: number;
      pages: number;
    };
  };
}

export interface IReviewProps{
  reviews: IReview[];
  show: IShow;
  onAddReview: (review: IReview) => void;
  pagination?: {
    count: number;
    items: number;
    page: number;
    pages: number;
  }
}

export interface IReviewFormProps{
  handleReview: (review: IReview) => void;
  mode: "create" | "update";
  show_id: string;
  review?: IReview;
}

export interface IReviewListProps{
  reviews: IReview[];
}

export interface IReviewItemProps{
  review: IReview;
}