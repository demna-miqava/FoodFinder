import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import {theme} from '@app/theme';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ResutaurantsScreen from '@features/restaurants/screens/RestaurantsScreen';
import './src/assets/localization/';
const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
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
