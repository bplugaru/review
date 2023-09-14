
export type StarRating = 0 | 1 | 2 | 3 | 4 | 5;

export type Review = {
  id: string;
  name: string;
  website?: string;
  rating: StarRating;
  review: string;
  createdAt: string;
};
export type NewReview = Omit<Review, 'id' | 'createdAt' | 'image'>;
