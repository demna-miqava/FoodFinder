import React from 'react';
import {useFavorites, useMount, useNoWifiToast} from '@hooks/';
import {userStorage} from '@helpers/';
import {TabNavigation} from './TabNavigation';

export const Route = () => {
  useNoWifiToast();
  const {hydrate} = useFavorites();

  useMount(async () => {
    await userStorage.bootstrap();
    const data = userStorage.getFavorites() || [];
    hydrate(data);
  });

  return <TabNavigation />;
};
