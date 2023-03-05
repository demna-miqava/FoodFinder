import React from 'react';
import {View} from 'native-base';
import {SettingsList} from '../components/';
import {HeartIcon, LogoutIcon} from '@app/assets/icons';
import {spaces} from '@app/theme';

const SettingsListItems = [
  {
    text: 'favorites',
    icon: <HeartIcon fill="red" bgFill="red" />,
    secondaryText: 'view_your_favorites',
  },
  {
    text: 'logout',
    icon: <LogoutIcon />,
  },
];

export const SettingsScreen = () => {
  return (
    <View flex={1} px={spaces[3]} py={2}>
      <SettingsList items={SettingsListItems} />
    </View>
  );
};
