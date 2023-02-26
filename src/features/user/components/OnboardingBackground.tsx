import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';

interface Props {
  children: React.ReactElement;
}

const imageSrc = require('../../../assets/images/home_bg.jpg');

export const OnboardingBackground = ({children}: Props) => {
  return (
    <ImageBackground
      source={imageSrc}
      resizeMode="cover"
      style={styles.container}>
      {children}
    </ImageBackground>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
