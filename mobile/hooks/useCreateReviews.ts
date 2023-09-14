import { useMutation, useQueryClient } from 'react-query';
import { NewReview, Review } from './types';

const postReview = async (body: NewReview) => {
  const response = await fetch('http://localhost:3000/reviews', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  return response.json();
};

const useCreateReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (review: NewReview) => postReview(review),
    onSuccess: (newReview) => {
      queryClient.setQueryData<Review[]>('reviews', (old) => [
        newReview,
        ...(old || []),
      ]);
    },
  });
};

export default useCreateReview;
