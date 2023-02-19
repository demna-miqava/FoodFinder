import {HStack, Pressable, useTheme, View} from 'native-base';
import React, {useMemo} from 'react';
import {HeartIcon, OpenNowIcon, StarIcon} from '@icons/';
import {Image} from '@components/Image';
import {Text} from '@components/Typography';
import {RestaurantCardType} from '@type/';
import {useTranslation} from 'react-i18next';
import {BusinessStatusEnum} from '@app/constants';
import {useFavorites} from '@app/hooks';

export const RestaurantsInfoCard = ({
  restaurant,
  children,
}: {
  restaurant: RestaurantCardType;
  children?: React.ReactElement;
}) => {
  const {
    name,
    icon,
    photos,
    opening_hours,
    rating,
    business_status,
    address = 'some address',
    place_id,
  } = restaurant;
  const theme = useTheme();

  const {t} = useTranslation();

  const {favorites, toggleFavorites} = useFavorites();

  const ratingArray = Array.from({length: Math.ceil(rating)}, () =>
    Math.random(),
  );

  const isFavorite = useMemo(
    () => favorites.find(item => item === place_id),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorites],
  );
  //https://github.com/Monte9/react-native-ratings

  return (
    <View style={stylesBuilder(theme).container}>
      <Image
        source={{
          uri: photos[0],
        }}
        style={stylesBuilder(theme).mainImageStyles}
      />
      <View style={stylesBuilder(theme).infoContainer}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="body">{name}</Text>
          <Pressable
            onPress={() => {
              toggleFavorites(place_id);
            }}>
            <HeartIcon fill={isFavorite ? 'red' : 'gray'} />
          </Pressable>
        </HStack>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack>
            {ratingArray.map(item => (
              <StarIcon key={item} />
            ))}
          </HStack>
          <HStack alignItems="center" space={1}>
            {business_status === BusinessStatusEnum.CLOSED_TEMPORARILY && (
              <Text color="ui.error">{t('temporarilyClosed')}</Text>
            )}
            {opening_hours?.open_now && <OpenNowIcon />}
            <Image
              source={{
                uri: icon,
              }}
              style={stylesBuilder(theme).iconStyles}
            />
          </HStack>
        </HStack>
        <Text>{address}</Text>
      </View>
      {children}
    </View>
  );
};

const stylesBuilder = theme => ({
  container: {
    borderRadius: theme.space[2],
    backgroundColor: theme.colors.bg.primary,
    padding: theme.space[3],
    marginBottom: theme.space[3],
  },
  infoContainer: {
    paddingTop: theme.space[2],
  },
  mainImageStyles: {
    width: '100%',
    height: 150,
  },
  iconStyles: {
    width: 15,
    height: 15,
  },
});
