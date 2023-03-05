import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {HStack, Link} from 'native-base';
import {Text} from '@components/Typography';
import {spaces} from '@app/theme';

interface Props {
  text: string;
  navigateText: string;
  navigateTo: string;
}

export const AuthLink = ({text, navigateText, navigateTo}: Props) => {
  const navigation = useNavigation<any>();

  return (
    <HStack space={spaces[2]} mt={spaces[3]} alignItems="center">
      <Text>{text}</Text>
      <Link
        _text={{
          fontSize: 'caption',
          fontWeight: 'bold',
        }}
        onPress={() => navigation.navigate(navigateTo)}>
        {navigateText}
      </Link>
    </HStack>
  );
};
