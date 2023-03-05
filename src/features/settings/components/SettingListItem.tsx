import React from 'react';
import {Text} from '@components/Typography';
import {HStack, VStack} from 'native-base';
import {spaces} from '@app/theme';
import {ListItemType} from './listItem.type';
import {useTranslation} from 'react-i18next';
import {TouchableOpacity} from 'react-native';

export const SettingsListItem = ({
  text,
  icon,
  secondaryText,
  onPress,
}: ListItemType) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity onPress={onPress}>
      <HStack space={3} alignItems="center" mb={spaces[3]}>
        {icon}
        <VStack>
          <Text>{t(text)}</Text>
          {secondaryText && <Text>{t(secondaryText)}</Text>}
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};
