export interface IShow {
  id: string;
  title: string;
  average_rating: number;
  no_of_reviews: number;
  description?: string;
  image_url?: string;
}

export interface IShowList{
  shows: IShow[];
}

export interface IShowCard  {
  id: string;
  title: string;
  averageRating: number;
  imageUrl: string;
}