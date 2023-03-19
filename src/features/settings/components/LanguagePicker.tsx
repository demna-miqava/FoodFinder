import React from 'react';
import {Text} from '@components/Typography';
import {Actionsheet, Pressable, HStack} from 'native-base';
import {GeorgianFlag, USAFlag} from '@app/assets/icons';
import {userStorage} from '@app/helpers';
import {useTranslation} from 'react-i18next';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const LanguagePicker = ({isOpen, onClose}: Props) => {
  const {t, i18n} = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    userStorage.setLanguage(lng);
    onClose();
  };

  return (
    <Actionsheet isOpen={isOpen} onClose={onClose}>
      <Actionsheet.Content>
        <Text>{t('pick_a_language')}</Text>
        <Actionsheet.Item>
          <Pressable onPress={() => changeLanguage('ge')}>
            <HStack space={2} alignItems="center">
              <GeorgianFlag />
              <Text>{t('georgian')}</Text>
            </HStack>
          </Pressable>
        </Actionsheet.Item>
        <Actionsheet.Item>
          <Pressable onPress={() => changeLanguage('en')}>
            <HStack space={2} alignItems="center">
              <USAFlag />
              <Text>{t('english')}</Text>
            </HStack>
          </Pressable>
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
};
