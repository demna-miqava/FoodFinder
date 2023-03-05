import React from 'react';
import {Avatar, View} from 'native-base';
import {SettingsList} from '../components/';
import {HeartIcon, LogoutIcon} from '@app/assets/icons';
import {spaces} from '@app/theme';
import {SpacerComponent} from '@components/Spacer';

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
    <View flex={1} px={spaces[3]} py={spaces[1]}>
      <Avatar alignSelf="center" w="120" h="120" bgColor="brand.primary">
        DM
      </Avatar>
      <SpacerComponent height="40px" />
      <SettingsList items={SettingsListItems} />
    </View>
  );
};
