import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SettingsScreen} from '@features/settings/screens';
import {FavoritesScreen} from '@features/favorites/screens';

const SettingsStack = createNativeStackNavigator();

export const SettingsStackNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="SettingsHome" component={SettingsScreen} />
      <SettingsStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingsStack.Navigator>
  );
};
