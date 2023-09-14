import React from 'react';
import { VStack, Text, HStack } from '@gluestack-ui/themed';
import Stars from './StarsView';
import { format } from 'timeago.js';
import { Review as ReviewType } from '../hooks/types';
import Card from './Card';

type Props = {
  review: ReviewType;
};

const Review = ({ review }: Props) => {
  return (
    <Card>
      <VStack>
        <Text>{review.name ?? 'Anonymous'}</Text>
        <HStack>
          <Stars size={19} rating={review.rating} />
          <Text>{format(review.createdAt)}-</Text>
          <Text>{review.website}</Text>
        </HStack>
        <Text
          sx={{
            width: '50%',
          }}
        >
          {review.review}
        </Text>
      </VStack>
    </Card>
  );
};

export default Review;
