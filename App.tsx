import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import MainScreen from '@screens/MainScreen';
import {theme} from '@app/theme';
import {SafeAreaView} from 'react-native';
const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <NativeBaseProvider theme={theme}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'teal',
        }}>
        <MainScreen />
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default App;
