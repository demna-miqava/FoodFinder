import React from 'react';
import {View} from 'native-base';
import {spaces} from '@theme/index';
import {SearchBar} from '@components/SearchBar';
import {useTranslation} from 'react-i18next';

type Props = {};

export const RestaurantSearch = (props: Props) => {
  const {t} = useTranslation();
  return (
    <View pb={spaces[3]}>
      <SearchBar label={t('searchRestaurnats')} />
    </View>
  );
};
