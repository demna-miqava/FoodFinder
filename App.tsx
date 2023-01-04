/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NativeBaseProvider, Text} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);
  return (
    <NativeBaseProvider>
      {/* look at lesson 23 for custom fonts */}
      {/* <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <Text>hei</Text>
      </SafeAreaView> */}
      <Text>demna</Text>
    </NativeBaseProvider>
  );
};

export default App;
