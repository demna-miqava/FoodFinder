import React, {useMemo} from 'react';
import {useDisclose, View} from 'native-base';
import {Avatar, SettingsList} from '../components/';
import {HeartIcon, LanguageIcon, LogoutIcon} from '@app/assets/icons';
import {spaces} from '@app/theme';
import {SpacerComponent} from '@components/Spacer';
import {useUser} from '@hooks/';
import {userStorage} from '@app/helpers';
import {User} from '@app/types';
import {useNavigation} from '@react-navigation/native';
import {LanguagePicker} from '../components/LanguagePicker';

export const SettingsScreen = () => {
  const {user, logout} = useUser();
  const {firstName, lastName, email} = user as User;
  const navigation = useNavigation<any>();
  const {isOpen, onOpen, onClose} = useDisclose();

  const settingsListItems = useMemo(
    () => [
      {
        text: 'favorites',
        icon: <HeartIcon fill="red" bgFill="red" />,
        secondaryText: 'view_your_favorites',
        onPress: () => {
          navigation.navigate('Favorites');
        },
      },
      {
        text: 'logout',
        icon: <LogoutIcon />,
        onPress: () => {
          logout();
          userStorage.logout();
        },
      },
      {
        text: 'language',
        icon: <LanguageIcon />,
        onPress: onOpen,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <View flex={1} px={spaces[3]} py={spaces[1]}>
      <Avatar firstName={firstName} lastName={lastName} email={email} />
      <SpacerComponent height="40px" />
      <SettingsList items={settingsListItems} />
      <LanguagePicker isOpen={isOpen} onClose={onClose} />
    </View>
  );
};
