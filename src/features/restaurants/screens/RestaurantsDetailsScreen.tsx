import React from 'react';
import {View} from 'native-base';
import {useRoute} from '@react-navigation/native';
import {RestaurantsInfoCard} from '../components';
import {AccordionComponent} from '@components/Accordion';
import {Text} from '@components/Typography';

const CONTENT = [
  {
    title: 'Breakfast',
    content: (
      <View>
        <Text style={{color: 'green'}}>first</Text>
      </View>
    ),
  },
  {
    title: 'Lunch',
    content: (
      <View>
        <Text style={{color: 'red'}}>second</Text>
      </View>
    ),
  },
  {
    title: 'Dinner',
    content: (
      <View>
        <Text style={{color: 'blue'}}>third</Text>
      </View>
    ),
  },
];

export const RestaurantsDetailsScreen = () => {
  const {params} = useRoute<any>();
  const {restaurant} = params;

  return (
    <View>
      <RestaurantsInfoCard restaurant={restaurant} />
      <AccordionComponent content={CONTENT} />
    </View>
  );
};
