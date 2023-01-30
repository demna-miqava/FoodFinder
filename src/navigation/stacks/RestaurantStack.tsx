import React from 'react';
import {RestaurantsScreen} from '@features/restaurants/screens/RestaurantsScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text} from 'native-base';

const RestaurantStack = createNativeStackNavigator();

const Details = () => {
  return <Text>details comp</Text>;
};

export const RestaurantStackComponent = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen name="RestaurantDetails" component={Details} />
    </RestaurantStack.Navigator>
  );
};
