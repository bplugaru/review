import React from 'react';
import { HStack } from '@gluestack-ui/themed';
import Star from './Star';

type Props = {
  rating: number;
  size: number;
};

const StarsView = ({ rating, size }: Props) => {
  if (rating === -1)
    return (
      <HStack>
        <Star type="outline" size={size} />
        <Star type="outline" size={size} />
        <Star type="outline" size={size} />
        <Star type="outline" size={size} />
        <Star type="outline" size={size} />
      </HStack>
    );
  const stars = [...Array(5).keys()].map((key) => {
    return key < rating ? (
      <Star type="fill-active" key={key} size={size} />
    ) : (
      <Star type="fill-inactive" key={key} size={size} />
    );
  });
  return <HStack>{stars}</HStack>;
};

StarsView.defaultProps = {
  rating: -1,
  size: 32,
};
export default StarsView;
