import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View} from 'native-base';
import {Text} from '@components/Typography';
import ResutaurantsScreen from '@features/restaurants/screens/RestaurantsScreen';
import {useNoWifiToast} from '@hooks/';
import {userStorage} from '@helpers/';
import {HomeIcon, MapsIcon, SettingsIcon} from '@icons/';

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
        tabBarIcon: () => {
          if (route.name === 'Restaurants') {
            return <HomeIcon />;
          } else if (route.name === 'Settings') {
            return <SettingsIcon />;
          } else if (route.name === 'Maps') {
            return <MapsIcon />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
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
