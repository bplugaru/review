import React from 'react';
import { Box } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

type Props = {
  type: 'outline' | 'fill-inactive' | 'fill-active';
  size: number;
  onPress?: () => void;
};

const Star = ({ type, size, ...props }: Props) => {
  return (
    <Pressable {...props}>
      {type === 'outline' && (
        <Ionicons name="star-outline" size={size} color="#DDDDDD" />
      )}
      {type === 'fill-active' && (
        <Ionicons color="#FECD01" name="star" size={size} />
      )}
      {type === 'fill-inactive' && (
        <Ionicons color="#DDDDDD" name="star" size={size} />
      )}
    </Pressable>
  );
};

export default Star;
