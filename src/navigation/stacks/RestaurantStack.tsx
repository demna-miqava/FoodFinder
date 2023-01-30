import React from 'react';
import {
  RestaurantsScreen,
  RestaurantsDetailsScreen,
} from '@features/restaurants/screens/';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RestaurantStack = createNativeStackNavigator();

export const RestaurantStackComponent = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{headerShown: false, animation: 'fade_from_bottom'}}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantsDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};
