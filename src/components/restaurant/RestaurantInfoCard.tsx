import React, {useMemo} from 'react';
import {HStack, Pressable, useTheme, View} from 'native-base';
import {useTranslation} from 'react-i18next';
import {HeartIcon, OpenNowIcon, StarIcon} from '@icons/';
import {Image} from '@components/Image';
import {Text} from '@components/Typography';
import {RestaurantCardType, ToastStatus} from '@type/';
import {BusinessStatusEnum, ToastIds} from '@constants/';
import {useBasicToast, useFavorites} from '@hooks/';
import {getImageUrl} from '@helpers/';

const addedToFavoritesMessage = 'added_to_favorites_successfully';
const remvedFromFavoritesMessage = 'removed_from_favorites_successfully';

const addedToFavorites = ToastIds.AddedToFavoritesSuccessFully;
const removedFromFavorites = ToastIds.RemovedFromFavoritesSuccessFully;

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
    opening_hours,
    rating,
    business_status,
    address,
    place_id,
    imageRef,
  } = restaurant;
  const theme = useTheme();

  const {t} = useTranslation();

  const {favorites, toggleFavorites} = useFavorites();
  const {showToast} = useBasicToast();

  const ratingArray = Array.from({length: Math.ceil(rating)}, () =>
    Math.random(),
  );

  const favoriteConfig = useMemo(
    () => {
      const isFavorite = favorites.find(
        (item: RestaurantCardType) => item.place_id === place_id,
      );
      return {
        toastInfo: {
          id: `${place_id}-${
            isFavorite ? removedFromFavorites : addedToFavorites
          }`,
          title: isFavorite
            ? remvedFromFavoritesMessage
            : addedToFavoritesMessage,
          message: '',
          status: 'success' as ToastStatus,
          duration: 1500,
        },
        fill: isFavorite ? 'red' : 'gray',
        bgFill: isFavorite ? 'red' : 'white',
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [favorites],
  );

  return (
    <View style={stylesBuilder(theme).container}>
      <Image
        source={{
          uri: getImageUrl(imageRef),
        }}
        style={stylesBuilder(theme).mainImageStyles}
      />
      <View style={stylesBuilder(theme).infoContainer}>
        <HStack alignItems="center" justifyContent="space-between">
          <Text fontSize="body">{name}</Text>
          <Pressable
            onPress={() => {
              toggleFavorites(restaurant);
              showToast(favoriteConfig.toastInfo);
            }}>
            <HeartIcon
              width={20}
              height={20}
              fill={favoriteConfig.fill}
              bgFill={favoriteConfig.bgFill}
            />
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

const stylesBuilder = (theme: any) => ({
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
    borderRadius: 5,
  },
  iconStyles: {
    width: 15,
    height: 15,
  },
});
