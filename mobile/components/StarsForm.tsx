import React, { useState } from 'react';
import { HStack } from '@gluestack-ui/themed';
import Star from './Star';

type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'stretch';

type SxProps = {
  justifyContent?: JustifyContent;
  margin?: string;
};
type Props = {
  size: number;
  rating: number;
  onChange: (key: number) => void;
  sx: SxProps;
};

const StarsForm = ({ size, rating, sx, onChange }: Props) => {
  const stars = [...Array(5).keys()].map((key) => {
    return key < rating ? (
      <Star
        type="fill-active"
        key={key}
        size={size}
        onPress={() => onChange(key + 1)}
      />
    ) : (
      <Star
        type="fill-inactive"
        key={key}
        size={size}
        onPress={() => onChange(key + 1)}
      />
    );
  });
  return <HStack sx={sx}>{stars}</HStack>;
};

StarsForm.defaultProps = {
  rating: -1,
  size: 32,
};
export default StarsForm;
