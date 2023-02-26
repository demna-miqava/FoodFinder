import React from 'react';
import {ImageBackground} from 'react-native';
import {View} from 'native-base';

interface Props {
  children: React.ReactElement;
}

const imageSrc = require('../../../assets/images/home_bg.jpg');

export const OnboardingBackground = ({children}: Props) => {
  return (
    <View flex={1}>
      <ImageBackground source={imageSrc} resizeMode="cover" style={{flex: 1}}>
        {children}
      </ImageBackground>
    </View>
  );
};
