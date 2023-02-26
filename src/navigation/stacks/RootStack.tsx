import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabNavigation} from '../TabNavigation';

const RootStack = createNativeStackNavigator();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{headerShown: false}}>
      <RootStack.Screen name="Main" component={TabNavigation} />
    </RootStack.Navigator>
  );
};
