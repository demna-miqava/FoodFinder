import React from 'react';
import {View} from 'native-base';
import {spaces} from '@theme/index';
import {SearchBar} from '@components/SearchBar';
import {useTranslation} from 'react-i18next';

type Props = {
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
};

export const RestaurantSearch = ({setSearchCity}: Props) => {
  const {t} = useTranslation();
  return (
    <View pb={spaces[3]}>
      <SearchBar label={t('searchRestaurnats')} onChange={setSearchCity} />
    </View>
  );
};
