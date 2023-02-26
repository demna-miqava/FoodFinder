import React from 'react';
import {useFavorites, useMount, useNoWifiToast, useUser} from '@hooks/';
import {userStorage} from '@helpers/';
import {TabNavigation} from './TabNavigation';
import {OnboardingStackNavigator} from './stacks';
import {SafeAreaView} from 'react-native-safe-area-context';

export const Route = () => {
  useNoWifiToast();
  const {user} = useUser();
  const {hydrate} = useFavorites();

  useMount(async () => {
    await userStorage.bootstrap();
    const data = userStorage.getFavorites() || [];
    hydrate(data);
  });

  return (
    <>
      {user ? (
        <SafeAreaView style={{flex: 1}} edges={['top']}>
          <TabNavigation />
        </SafeAreaView>
      ) : (
        <OnboardingStackNavigator />
      )}
    </>
  );
};
