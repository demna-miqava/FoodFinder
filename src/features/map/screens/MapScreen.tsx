import React from 'react';
import {Text} from '@components/Typography';
import {View} from 'native-base';

type Props = {};

export const MapScreen = (props: Props) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MapScreen</Text>
    </View>
  );
};
