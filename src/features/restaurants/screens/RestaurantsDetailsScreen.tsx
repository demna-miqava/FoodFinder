import React from 'react';
import {View} from 'native-base';
import {useRoute} from '@react-navigation/native';
import {AccordionComponent} from '@components/Accordion';
import {accordionContentData} from '../components/accordionContentData';
import {RestaurantsInfoCard} from '@components/restaurant';

export const RestaurantsDetailsScreen = () => {
  const {params} = useRoute<any>();
  const {restaurant} = params;

  return (
    <View>
      <RestaurantsInfoCard restaurant={restaurant}>
        <AccordionComponent content={accordionContentData} />
      </RestaurantsInfoCard>
    </View>
  );
};
