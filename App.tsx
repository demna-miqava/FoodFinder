import React from 'react';
import {NativeBaseProvider, View} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import MainScreen from '@screens/MainScreen';
import {theme} from '@app/theme';
const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <NativeBaseProvider theme={theme}>
      <View>
        <MainScreen />
      </View>
    </NativeBaseProvider>
  );
};

export default App;
