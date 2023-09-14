import { Pressable, StyleSheet, Text, Touchable, View } from 'react-native';
import React, { ReactNode } from 'react';
import { Box, HStack } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';

type Props = {
  children: ReactNode;
};

const Card = ({ children }: Props) => {
  return (
    <HStack>
      <Box>
        <Ionicons name="person-circle" size={40} color="#CCCCCC" />
      </Box>
      {children}
    </HStack>
  );
};

export default Card;

const styles = StyleSheet.create({});
