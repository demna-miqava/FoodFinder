import React from 'react';
import {Text} from '@components/Typography';
import {OnboardingBackground} from '../components/OnboardingBackground';
import {useTranslation} from 'react-i18next';
import {HStack} from 'native-base';
import {OnboardingCard} from '../components';
import {spaces} from '@app/theme';

export const MainScreen = () => {
  const {t} = useTranslation();
  return (
    <OnboardingBackground>
      <Text textAlign="center" fontSize="button" fontWeight="bold">
        {t('introduction_text')}
      </Text>
      <HStack mt={spaces[1]} justifyContent="space-around">
        <OnboardingCard text={t('sign_in')} navigateTo="SignIn" />
        <OnboardingCard text={t('sign_up')} navigateTo="SignUp" />
      </HStack>
    </OnboardingBackground>
  );
};
