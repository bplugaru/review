import React, { useMemo } from 'react';
import { ViewAll } from './ViewAll';
import { Review } from '../hooks/types';
import { Box, HStack, Text, View } from '@gluestack-ui/themed';

type Props = {
  reviews: Review[];
};

export const Summary = ({ reviews }: Props) => {
  console.log('reviews', reviews);
  if (!reviews) {
    return null;
  }
  const score = useMemo(() => {
    return (
      reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
    );
  }, [reviews]);
  return (
    <HStack
      sx={{
        marginBottom: '$1.5',
        justifyContent: 'space-between',
      }}
    >
      <HStack>
        <Box
          sx={{
            height: 35,
            width: 35,
            backgroundColor: '#FECD01',
            borderRadius: 8,
						alignItems:'center',
						justifyContent: 'center'
          }}
        >
          <Text
            sx={{
              fontSize: 16,
              fontWeight: 'bold',
            }}
          >
            {score}
          </Text>
        </Box>
        <Text
          sx={{
            color: '#9B9B9B',
            fontSize: '$sm',
            alignSelf: 'center',
						marginLeft: '$1'
          }}
        >
          from 27 ratings
        </Text>
      </HStack>
      <ViewAll />
    </HStack>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 20,
//     paddingBottom: 10,
//     borderBottomColor: '#EFEFEF',
//     borderBottomWidth: 1,
//   },
//   score: {

//   },
//   text: {

//   },
//   info: {
//     fontSize: 13,
//     color: '#9B9B9B',
//     flex: 2,
//     marginLeft: 10,
//   },
// });
