import React from 'react';
import {View} from 'native-base';
import {spaces} from '@theme/index';
import {SearchBar} from '@components/SearchBar';
import {useTranslation} from 'react-i18next';
import {HeartIcon} from '@app/assets/icons';
import {Pressable} from 'react-native';

type Props = {
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
  setIsFavoritesOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFavoritesOpen: boolean;
};

export const RestaurantSearch = ({
  setSearchCity,
  setIsFavoritesOpen,
  isFavoritesOpen,
}: Props) => {
  const {t} = useTranslation();
  return (
    <View pb={spaces[3]}>
      <SearchBar
        label={t('searchRestaurnats')}
        onChange={setSearchCity}
        icon={
          <Pressable
            onPress={() => {
              setIsFavoritesOpen(prevState => !prevState);
            }}>
            <HeartIcon
              width={40}
              height={20}
              bgFill={isFavoritesOpen ? 'red' : 'white'}
              fill={isFavoritesOpen ? 'red' : 'gray'}
            />
          </Pressable>
        }
      />
    </View>
  );
};
