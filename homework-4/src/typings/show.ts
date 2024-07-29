export interface IShow {
  id: string;
  title: string;
  average_rating: number;
  description?: string;
  image_url?: string;
  no_of_reviews: number;
}

export interface IShowList{
  shows: IShow[];
  meta?: {
    pagination: {
      count: number;
      items: number;
      page: number;
      pages: number;
    };
  };
}

export interface IShowCard  {
  id: string;
  title: string;
  averageRating: number;
  imageUrl: string;
}