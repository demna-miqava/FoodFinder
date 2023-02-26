import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {theme} from '@app/theme';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Route} from '@navigations/';
import {QueryClient, QueryClientProvider} from 'react-query';
import {Provider} from 'react-redux';
import {store} from '@app/redux';
import './src/assets/localization/';

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <NativeBaseProvider theme={theme}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <Route />
          </NativeBaseProvider>
        </NavigationContainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
