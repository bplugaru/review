import React, { useEffect, useRef, useState } from 'react';
import StarsForm from '../components/StarsForm';
import { StackScreenProps } from '@react-navigation/stack';

import SaveReview from '../components/SaveReview';
import useCreateReview from '../hooks/useCreateReviews';
import { NewReview, StarRating } from '../hooks/types';
import {
  Box,
  Input,
  InputField,
  Text,
  Textarea,
  TextareaInput,
} from '@gluestack-ui/themed';
import { RootStackParamList } from '../type';
import { Alert } from 'react-native';

type Props = StackScreenProps<RootStackParamList, 'AddReview'>;

const reviewText: { [key in StarRating]: string } = {
  5: 'I loved it!',
  4: 'I really liked it.',
  3: 'It was okay.',
  2: "I didn't like it much.",
  1: "I didn't like it at all.",
  0: '',
};
function getReviewMessage(rating: StarRating): string {
  return reviewText[rating];
}

const AddReview = ({ navigation }: Props) => {
  const { mutate } = useCreateReview();
  const [newReview, setNewReview] = useState<NewReview>({
    rating: 0,
    name: '',
    review: '',
  });
  const newReviewRef = useRef<NewReview>(newReview);
  useEffect(() => {
    newReviewRef.current = newReview;
  }, [newReview]);
  const isValid = (review: NewReview) =>
    !(review.rating === 0 || review.name === '' || review.review === '');

  const handleSave = () => {
    if (newReviewRef.current && isValid(newReviewRef.current)) {
      mutate(newReviewRef.current, {
        onSuccess: () => {
          navigation.navigate('Home');
        },
      });
    } else {
      Alert.alert('An error occurred', 'All fields are required', [
        { text: 'OK' },
      ]);
    }
  };

  useEffect(() => {
    newReviewRef.current = newReview;
  }, [newReview]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <SaveReview onPress={() => handleSave()} />,
    });
  }, [navigation]);

  const handleChange = (key: keyof NewReview, value: number | string) => {
    setNewReview((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <Box
      sx={{
        width: '100%',
      }}
    >
      <StarsForm
        rating={newReview.rating}
        size={39}
        onChange={(rating: number) => handleChange('rating', rating)}
        sx={{
          justifyContent: 'center',
          margin: '1rem',
        }}
      />
      <Text
        sx={{
          textAlign: 'center',
        }}
      >
        {getReviewMessage(newReview.rating)}
      </Text>
      <Input>
        <InputField
          placeholder="Your name"
          value={newReview.name}
          onChangeText={(name: string) => handleChange('name', name)}
        />
      </Input>

      <Textarea>
        <TextareaInput
          placeholder="Add more details on your experience…"
          value={newReview.review}
          onChangeText={(review: string) => handleChange('review', review)}
        />
      </Textarea>
    </Box>
  );
};

export default AddReview;
