import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import {theme} from '@app/theme';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import ResutaurantsScreen from '@features/restaurants/screens/RestaurantsScreen';
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
          <ResutaurantsScreen />
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
