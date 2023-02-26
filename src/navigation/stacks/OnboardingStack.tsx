import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, SignInScreen, SignUpScreen} from '@features/user/screens';

const OnboardingStack = createNativeStackNavigator();

export const OnboardingStackNavigator = () => {
  return (
    <OnboardingStack.Navigator screenOptions={{headerShown: false}}>
      <OnboardingStack.Screen name="Main" component={MainScreen} />
      <OnboardingStack.Screen name="SignUp" component={SignUpScreen} />
      <OnboardingStack.Screen name="SignIn" component={SignInScreen} />
    </OnboardingStack.Navigator>
  );
};
