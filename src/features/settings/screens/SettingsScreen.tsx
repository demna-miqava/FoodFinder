import React, {useMemo} from 'react';
import {Avatar, View, VStack} from 'native-base';
import {SettingsList} from '../components/';
import {HeartIcon, LogoutIcon} from '@app/assets/icons';
import {spaces} from '@app/theme';
import {SpacerComponent} from '@components/Spacer';
import {Text} from '@components/Typography';
import {useUser} from '@hooks/';
import {getUserInitials, userStorage} from '@app/helpers';
import {User} from '@app/types';

export const SettingsScreen = () => {
  const {user, logout} = useUser();
  const {firstName, lastName, email} = user as User;

  const settingsListItems = useMemo(
    () => [
      {
        text: 'favorites',
        icon: <HeartIcon fill="red" bgFill="red" />,
        secondaryText: 'view_your_favorites',
        onPress: () => {},
      },
      {
        text: 'logout',
        icon: <LogoutIcon />,
        onPress: () => {
          logout();
          userStorage.logout();
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <View flex={1} px={spaces[3]} py={spaces[1]}>
      <VStack space={2} alignSelf="center">
        <Avatar
          alignSelf="center"
          w="120"
          h="120"
          bgColor="brand.primary"
          _text={{
            fontSize: 'body',
          }}>
          {getUserInitials(firstName, lastName)}
        </Avatar>
        <Text>{email}</Text>
      </VStack>
      <SpacerComponent height="40px" />
      <SettingsList items={settingsListItems} />
    </View>
  );
};
