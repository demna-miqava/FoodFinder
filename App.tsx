import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import MainScreen from '@screens/MainScreen';
import {theme} from '@app/theme';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
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
          <MainScreen />
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
