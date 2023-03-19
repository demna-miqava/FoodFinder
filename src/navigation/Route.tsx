import React, {useState} from 'react';
import {useFavorites, useMount, useNoWifiToast, useUser} from '@hooks/';
import {userStorage} from '@helpers/';
import {OnboardingStackNavigator, RootStackNavigator} from './stacks';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNBootSplash from 'react-native-bootsplash';
import {useTranslation} from 'react-i18next';

export const Route = () => {
  const [bootstrap, setBootstrap] = useState(false);
  useNoWifiToast();
  const {user, authenticateUser} = useUser();
  const {hydrate} = useFavorites();
  const {i18n} = useTranslation();

  useMount(async () => {
    await userStorage.bootstrap();
    const data = userStorage.getFavorites() || [];
    hydrate(data);
    const userInfo = userStorage.getUserInfo() || null;
    authenticateUser(userInfo);
    const lang = userStorage.getLanguage();
    i18n.changeLanguage(lang);
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
