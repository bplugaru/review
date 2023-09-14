import { View, Text, Pressable } from 'react-native';
import React from 'react';
import Card from './Card';
import { Box, Heading, VStack } from '@gluestack-ui/themed';
import StarsView from './StarsView';

type Props = {
  onPointerUp: () => void;
};

const RateAndReview = ({ onPointerUp }: Props) => {
  return (
    <Pressable onPress={onPointerUp}>
      <Card>
        <VStack>
          <Heading>RateAndReview</Heading>

          <Text>Share your experience to help others</Text>
          <StarsView />
        </VStack>
      </Card>
    </Pressable>
  );
};

export default RateAndReview;
