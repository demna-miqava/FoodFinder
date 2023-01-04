import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import MainScreen from '@screens/MainScreen';
const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <NativeBaseProvider>
      <MainScreen />
    </NativeBaseProvider>
  );
};

export default App;
