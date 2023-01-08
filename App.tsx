import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import {theme} from '@app/theme';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ResutaurantsScreen from '@features/restaurants/screens/RestaurantsScreen';
import './src/assets/localization/';
import {userStorage} from '@helpers/';
const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  // move this in Routes.tsx
  React.useEffect(() => {
    (async () => {
      await userStorage.bootstrap();
    })();
  }, []);
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <SafeAreaView
          style={{
            flex: 1,
            backgroundColor: 'teal',
          }}>
          <StatusBar backgroundColor="teal" barStyle="dark-content" />
          <ResutaurantsScreen />
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
