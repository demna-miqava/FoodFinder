import React from 'react';
import {OnboardingBackground} from '../components/OnboardingBackground';
import {useSignInForm} from '../hooks/signin';
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
        text={t('auth_form_sign_in_btn_text')}
        disabled={!isValid}
        onPress={onSubmit}
        isLoading={isLoading}
        isLoadingText={t('auth_btn_loading') || ''}
      />

      <AuthLink
        text={t('dont_have_an_account')}
        navigateText={t('auth_form_sign_in_btn_text')}
        navigateTo="SignUp"
      />
    </OnboardingBackground>
  );
};
