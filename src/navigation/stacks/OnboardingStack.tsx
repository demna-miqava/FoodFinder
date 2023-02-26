import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const OnboardingStack = createNativeStackNavigator();

export const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen name="SignUp" component={<></>} />
      <OnboardingStack.Screen name="SignIn" component={<></>} />
    </OnboardingStack.Navigator>
  );
};
