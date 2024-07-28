import { IUser } from '@/fetchers/user';
import { IReview } from './review';

export interface IApiResponseUser{
  user: IUser;
}
export interface IApiResponseReview {
  review: IReview
}
