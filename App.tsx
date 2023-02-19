import React from 'react';
import {NativeBaseProvider} from 'native-base';
import RNBootSplash from 'react-native-bootsplash';
import {theme} from '@app/theme';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Route} from '@navigations/';
import {QueryClient, QueryClientProvider} from 'react-query';
import {SafeAreaView} from 'react-native-safe-area-context';
import './src/assets/localization/';
import {Provider} from 'react-redux';
import {store} from '@app/redux';

const queryClient = new QueryClient();

const App = () => {
  React.useEffect(() => {
    setTimeout(() => {
      RNBootSplash.hide();
    }, 1000);
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <SafeAreaView style={{flex: 1}} edges={['top']}>
              <StatusBar backgroundColor="#fff" barStyle="dark-content" />
              <Route />
            </SafeAreaView>
          </NativeBaseProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
