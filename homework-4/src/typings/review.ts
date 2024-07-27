import { IShow } from "./show";

export interface IReview{
  comment: string;
  rating: number;
  show_id: string;
}

export interface IReviewList{
  reviews: IReview[];
}

export interface IReviewProps{
  reviews: IReview[];
  show: IShow;
  onAddReview: (review: IReview) => void;
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