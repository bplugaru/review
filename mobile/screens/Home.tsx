import { Summary } from '../components/Summary';
import type { StackScreenProps } from '@react-navigation/stack';

import RateAndReview from '../components/RateAndReview';
import Reviews from '../components/Reviews';
import { ViewAll } from '../components/ViewAll';
import useReviews from '../hooks/useReviews';
import { RootStackParamList } from '../type';
import { View, Heading } from '@gluestack-ui/themed';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

const Home = ({ navigation }: Props) => {
  const { data: reviews } = useReviews();

  const handleNavigateToAddReview = () => {
    navigation.navigate('AddReview');
  };

  if (!reviews) {
    return;
  }

  return (
    <View
      sx={{
        margin: '$4',
      }}
    >
      <Heading sx={{
        marginBottom: '$4',
        fontSize: '$2xl'
      }}>Reviews</Heading>
      <Summary reviews={reviews} />
      <RateAndReview onPointerUp={handleNavigateToAddReview} />
      <Reviews reviews={reviews} />
      <ViewAll />
    </View>
  );
};

export default Home;
