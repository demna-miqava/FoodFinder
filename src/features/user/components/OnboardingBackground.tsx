import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';

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
      <View style={styles.overlay} />
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
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
});
