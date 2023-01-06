import {Alert as NativeAlert, VStack} from 'native-base';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {Text} from '../Typography';

interface Props {
  title: string;
  message: string;
  status: 'success' | 'error' | 'info' | 'warning';
}

export const Alert = ({title, message, status}: Props) => {
  const {width} = useWindowDimensions();
  return (
    <NativeAlert variant="left-accent" status={status} w={width}>
      <VStack w="100%" textAlign="left" space={1.5}>
        <Text color="bg.primary" fontSize="body" fontWeight="bold">
          {title}
        </Text>
        <Text color="bg.primary" fontSize="button" fontWeight="medium">
          {message}
        </Text>
      </VStack>
    </NativeAlert>
  );
};
