import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import {theme} from '@app/theme';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import './src/assets/localization/';
import {Route} from '@navigations/';

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <SafeAreaView style={{flex: 1}}>
          <StatusBar
            backgroundColor="teal"
            barStyle="dark-content"
            // translucent
          />
          <Route />
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
