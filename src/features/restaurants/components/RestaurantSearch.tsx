import React from 'react';
import {View} from 'native-base';
import {spaces} from '@theme/index';
import {SearchBar} from '@components/SearchBar';
import {useTranslation} from 'react-i18next';
import {HeartIcon} from '@app/assets/icons';
import {Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

type Props = {
  setSearchCity: React.Dispatch<React.SetStateAction<string>>;
};

export const RestaurantSearch = ({setSearchCity}: Props) => {
  const {t} = useTranslation();
  const navigation = useNavigation<any>();
  return (
    <View pb={spaces[3]}>
      <SearchBar
        label={t('searchRestaurnats')}
        onChange={setSearchCity}
        icon={
          <Pressable
            onPress={() => {
              navigation.push('FavouriteRestaurants');
            }}>
            <HeartIcon width={40} height={20} />
          </Pressable>
        }
      />
    </View>
  );
};
