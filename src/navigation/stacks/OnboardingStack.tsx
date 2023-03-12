import React, {useMemo} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  OnboardingScreen,
  SignInScreen,
  SignUpScreen,
} from '@features/auth/screens';
import {userStorage} from '@app/helpers';
import {useLocationPermissions, useMount} from '@app/hooks';

const OnboardingStack = createNativeStackNavigator();

export const OnboardingStackNavigator = () => {
  const isFirstVisit = userStorage.getNumberOfVisits() === 1;
  const hasLoggedIn = userStorage.getHasLoggedIn();
  const {requestLocation} = useLocationPermissions();

  useMount(requestLocation);

  const initialRouteName = useMemo(() => {
    return isFirstVisit
      ? 'OnboardingScreen'
      : hasLoggedIn
      ? 'SignIn'
      : 'SignUp';
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OnboardingStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={initialRouteName}>
      <OnboardingStack.Screen
        name="OnboardingScreen"
        component={OnboardingScreen}
      />
      <OnboardingStack.Screen name="SignUp" component={SignUpScreen} />
      <OnboardingStack.Screen name="SignIn" component={SignInScreen} />
    </OnboardingStack.Navigator>
  );
};
