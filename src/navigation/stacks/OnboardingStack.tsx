import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, SignInScreen, SignUpScreen} from '@features/user/screens';
import {userStorage} from '@app/helpers';

const OnboardingStack = createNativeStackNavigator();

export const OnboardingStackNavigator = () => {
  const numberOfVisits = userStorage.getNumberOfVisits();
  userStorage.processNumberOfVisits();
  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={numberOfVisits ? 'SignIn' : 'Main'}>
      <OnboardingStack.Screen name="Main" component={MainScreen} />
      <OnboardingStack.Screen name="SignUp" component={SignUpScreen} />
      <OnboardingStack.Screen name="SignIn" component={SignInScreen} />
    </OnboardingStack.Navigator>
  );
};
