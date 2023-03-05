import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'native-base';
import {isPlatform} from '@helpers/';
import {Platform} from '@constants/';
import {RestaurantsStack, SettingsStackNavigator} from '../stacks';
import Icon from 'react-native-vector-icons/Ionicons';
import {MapScreen} from '@features/map/screens';

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  const theme = useTheme();

  const isAndroid = useMemo(() => isPlatform(Platform.Android), []);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          let iconName = '';

          if (route.name === 'Restaurants') {
            iconName = 'md-restaurant';
          } else if (route.name === 'Settings') {
            iconName = 'md-settings';
          } else if (route.name === 'Maps') {
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
        name="Restaurants"
        component={RestaurantsStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Maps"
        component={MapScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackNavigator}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
