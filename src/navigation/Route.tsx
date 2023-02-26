import React from 'react';
import {useFavorites, useMount, useNoWifiToast, useUser} from '@hooks/';
import {userStorage} from '@helpers/';
import {TabNavigation} from './TabNavigation';
import {OnboardingStackNavigator} from './stacks';

export const Route = () => {
  useNoWifiToast();
  const {user} = useUser();
  const {hydrate} = useFavorites();

  useMount(async () => {
    await userStorage.bootstrap();
    const data = userStorage.getFavorites() || [];
    hydrate(data);
  });

  return <>{user ? <TabNavigation /> : <OnboardingStackNavigator />}</>;
};
