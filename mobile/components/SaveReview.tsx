import React from 'react';
import { Button, ButtonText, Link, LinkText } from '@gluestack-ui/themed';

type Props = {
  onPress?: () => void;
};

const SaveReview = ({ onPress }: Props) => {
  return (
    <Link onPress={onPress}>
      <LinkText>Save</LinkText>
    </Link>
  );
};

export default SaveReview;
