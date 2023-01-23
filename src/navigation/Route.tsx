import React from 'react';
import {useNoWifiToast} from '@hooks/';
import {userStorage} from '@helpers/';
import {TabNavigation} from './TabNavigation';

export const Route = () => {
  useNoWifiToast();

  React.useEffect(() => {
    (async () => {
      await userStorage.bootstrap();
    })();
  }, []);

  return <TabNavigation />;
};
