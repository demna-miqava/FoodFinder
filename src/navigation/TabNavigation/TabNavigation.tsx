import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'native-base';
import {isPlatform} from '@helpers/';
import {Platform} from '@constants/';
import {RestaurantsStack, SettingsStackNavigator} from '../stacks';
import Icon from 'react-native-vector-icons/Ionicons';
import {MapScreen} from '@features/map/screens';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const theme = useTheme();
  const {t} = useTranslation();
  const restaurants = t('restaurants');
  const maps = t('maps');
  const settings = t('settings');

  const isAndroid = useMemo(() => isPlatform(Platform.Android), []);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === restaurants) {
            iconName = 'md-restaurant';
          } else if (route.name === settings) {
            iconName = 'md-settings';
          } else if (route.name === maps) {
            iconName = 'md-map';
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
        tabBarActiveTintColor: theme.colors.ui.teal,
        tabBarInactiveTintColor: theme.colors.ui.gray,
        tabBarStyle: {
          height: isAndroid ? 60 : 71,
          paddingBottom: isAndroid ? 12 : 22,
        },
      })}>
      <Tab.Screen
        name={restaurants}
        component={RestaurantsStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={maps}
        component={MapScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name={settings}
        component={SettingsStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
