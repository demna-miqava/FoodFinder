import {HStack, useTheme, View} from 'native-base';
import React from 'react';
import {OpenNowIcon, StarIcon} from '@icons/';
import {Image} from '@components/Image';
import {Text} from '@components/Typography';
import {RestaurantCardType} from '@type/';
import {useTranslation} from 'react-i18next';

export const RestaurantsInfoCard = ({
  restaurant,
}: {
  restaurant: RestaurantCardType;
}) => {
  const {
    name,
    icon,
    photos,
    address,
    openingHours,
    rating,
    isOpenNow,
    isClosedTemporarily,
  } = restaurant;
  const theme = useTheme();

  const {t} = useTranslation();

  const ratingArray = Array.from(new Array(Math.ceil(rating)));
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
        <Text fontSize="body">{name}</Text>
        <HStack justifyContent="space-between" alignItems="center">
          <HStack>
            {ratingArray.map(() => (
              <StarIcon />
            ))}
          </HStack>
          <HStack alignItems="center" space={1}>
            {!isClosedTemporarily && (
              <Text color="red.500">{t('temporarilyClosed')}</Text>
            )}
            {isOpenNow && <OpenNowIcon />}
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
