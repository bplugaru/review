import { useMutation, useQuery, useQueryClient } from 'react-query';
import { NewReview, Review } from './types';

const fetchReview = async () => {
  const response = await fetch('http://localhost:3000/reviews');
  return response.json();
};

const useReviews = () => useQuery('reviews', fetchReview);

export default useReviews;
