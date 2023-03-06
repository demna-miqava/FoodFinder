import React from 'react';
import {Text} from '@components/Typography';
import {OnboardingBackground} from '../components/OnboardingBackground';
import {useTranslation} from 'react-i18next';
import {HStack, View} from 'native-base';
import {OnboardingCard} from '../components';
import {spaces} from '@app/theme';
import Lottie from 'lottie-react-native';

export const OnboardingScreen = () => {
  const {t} = useTranslation();
  return (
    <OnboardingBackground>
      <View w="100%" h="20%" position="absolute" top="15%">
        <Lottie
          source={require('../../../assets/lotties/watermelon.json')}
          resizeMode="cover"
          autoPlay
          loop
        />
      </View>
      <Text textAlign="center" fontSize="button" fontWeight="bold">
        {t('introduction_text')}
      </Text>
      <HStack
        mt={spaces[1]}
        justifyContent="space-around"
        w="80%"
        alignSelf="center">
        <OnboardingCard text={t('sign_in')} navigateTo="SignIn" />
        <OnboardingCard text={t('sign_up')} navigateTo="SignUp" />
      </HStack>
    </OnboardingBackground>
  );
};
