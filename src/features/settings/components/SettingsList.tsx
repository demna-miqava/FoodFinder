import {View} from 'native-base';
import React from 'react';
import {ListItemType} from './listItem.type';
import {SettingsListItem} from './SettingListItem';

interface Props {
  items: ListItemType[];
}

export const SettingsList = ({items}: Props) => {
  return (
    <View>
      {items.map((item: ListItemType, index) => (
        <SettingsListItem key={index} {...item} />
      ))}
    </View>
  );
};
