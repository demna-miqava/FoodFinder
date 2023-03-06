import React from 'react';
import {spaces} from '@app/theme';
import {Alert as NativeAlert, HStack, VStack} from 'native-base';
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
    <NativeAlert variant="solid" status={status} w={width} mb="15px">
      <HStack w={width} alignItems="center" px={spaces[3]} space={3}>
        <NativeAlert.Icon size={30} />
        <VStack>
          <Text color="bg.primary" fontSize="body" fontWeight="bold">
            {title}
          </Text>
          {message && (
            <Text color="bg.primary" fontSize="button" fontWeight="medium">
              {message}
            </Text>
          )}
        </VStack>
      </HStack>
    </NativeAlert>
  );
};
