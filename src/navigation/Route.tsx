import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'native-base';
import {Text} from '@components/Typography';
import ResutaurantsScreen from '@features/restaurants/screens/RestaurantsScreen';
import {useNoWifiToast} from '@hooks/';
import {isPlatform, userStorage} from '@helpers/';
import Icon from 'react-native-vector-icons/Ionicons';

function MapsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export const Route = () => {
  useNoWifiToast();

  React.useEffect(() => {
    (async () => {
      await userStorage.bootstrap();
    })();
  }, []);

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
        tabBarStyle: {
          height: isPlatform('android') ? 60 : 71,
          paddingBottom: isPlatform('android') ? 12 : 22,
        },
      })}
      tabBarOptions={{
        activeTintColor: 'teal',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Restaurants"
        component={ResutaurantsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Maps"
        component={MapsScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
