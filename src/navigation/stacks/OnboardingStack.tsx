import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, SignInScreen, SignUpScreen} from '@features/user/screens';
import {userStorage} from '@app/helpers';

const OnboardingStack = createNativeStackNavigator();

export const OnboardingStackNavigator = () => {
  const isFirstVisit = userStorage.getNumberOfVisits() === 1;
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={isFirstVisit ? 'OnboardingScreen' : 'SignIn'}>
      <OnboardingStack.Screen name="OnboardingScreen" component={MainScreen} />
      <OnboardingStack.Screen name="SignUp" component={SignUpScreen} />
      <OnboardingStack.Screen name="SignIn" component={SignInScreen} />
    </OnboardingStack.Navigator>
  );
};
