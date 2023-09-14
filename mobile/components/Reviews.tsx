import { View, Text, FlatList, ListRenderItem } from 'react-native';
import React from 'react';
import { Heading, ScrollView } from '@gluestack-ui/themed';
import Review from './Review';
import { Review as ReviewType } from '../hooks/types';

type Props = {
  reviews: ReviewType[];
};

const renderItem: ListRenderItem<Review> = ({ item }) => (
  <Review review={item} key={item.id} />
);

const Reviews = ({ reviews }: Props) => {
  return (
    <View>
      <Heading>Latest reviews</Heading>
      <FlatList data={reviews} renderItem={renderItem} />
    </View>
  );
};

export default Reviews;
