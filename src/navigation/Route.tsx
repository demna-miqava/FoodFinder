import React, {useState} from 'react';
import {useFavorites, useMount, useNoWifiToast, useUser} from '@hooks/';
import {userStorage} from '@helpers/';
import {OnboardingStackNavigator, RootStackNavigator} from './stacks';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';

export const Route = () => {
  const [bootstrap, setBootstrap] = useState(false);
  useNoWifiToast();
  const {user} = useUser();
  const {hydrate} = useFavorites();

  useMount(async () => {
    await userStorage.bootstrap();
    const data = userStorage.getFavorites() || [];
    hydrate(data);
    setTimeout(() => {
      RNBootSplash.hide();
    }, 10);
    setBootstrap(true);
  });

  if (!bootstrap) {
    return null;
  }

  return (
    <>
      {user ? (
        <SafeAreaView style={{flex: 1}} edges={['top']}>
          <RootStackNavigator />
        </SafeAreaView>
      ) : (
        <OnboardingStackNavigator />
      )}
    </>
  );
};
