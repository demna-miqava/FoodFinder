import React from 'react';
import {Avatar as NativeAvatar, VStack} from 'native-base';
import {getUserInitials} from '@app/helpers';
import {Text} from '@components/Typography';

interface Props {
  firstName: string;
  lastName: string;
  email: string;
}

export const Avatar = ({firstName, lastName, email}: Props) => {
  return (
    <VStack space={2} alignSelf="center">
      <NativeAvatar
        alignSelf="center"
        w="120"
        h="120"
        bgColor="brand.primary"
        _text={{
          fontSize: 'body',
        }}>
        {getUserInitials(firstName, lastName)}
      </NativeAvatar>
      <Text>{email}</Text>
    </VStack>
  );
};
