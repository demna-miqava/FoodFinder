import React from 'react';
import {OnboardingBackground} from '../components/OnboardingBackground';
import {useSignInForm} from '../hooks';
import {useTranslation} from 'react-i18next';
import {CustomInput} from '../components/CustomInput';
import {AuthButton, AuthLink} from '../components';

export const SignInScreen = () => {
  const {t} = useTranslation();
  const {control, errors, isValid, isLoading, onSubmit} = useSignInForm();
  return (
    <OnboardingBackground>
      <CustomInput
        name="email"
        label={t('auth_form_email')}
        control={control}
        errors={errors}
      />
      <CustomInput
        name="password"
        label={t('auth_form_password')}
        control={control}
        errors={errors}
        type="password"
      />
      <AuthButton
        text={t('sign_in')}
        disabled={!isValid}
        onPress={onSubmit}
        isLoading={isLoading}
        isLoadingText={t('auth_btn_loading') || ''}
      />

      <AuthLink
        text={t('dont_have_an_account')}
        navigateText={t('sign_up')}
        navigateTo="SignUp"
      />
    </OnboardingBackground>
  );
};
