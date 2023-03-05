import React from 'react';
import {
  OnboardingBackground,
  CustomInput,
  AuthButton,
  AuthLink,
} from '../components';
import {useSignUpForm} from '../hooks';
import {useTranslation} from 'react-i18next';

export const SignUpScreen = () => {
  const {t} = useTranslation();
  const {control, errors, isValid, isLoading, onSubmit} = useSignUpForm();
  return (
    <OnboardingBackground>
      <CustomInput
        name="firstName"
        label={t('auth_form_first_name')}
        control={control}
        errors={errors}
      />
      <CustomInput
        name="lastName"
        label={t('auth_form_last_name')}
        control={control}
        errors={errors}
      />
      <CustomInput
        name="email"
        label={t('auth_form_email')}
        control={control}
        errors={errors}
      />
      <CustomInput
        name="password"
        label={t('auth_form_password')}
        type="password"
        control={control}
        errors={errors}
      />
      <AuthButton
        text={t('auth_form_btn_text')}
        onPress={onSubmit}
        disabled={!isValid}
        isLoading={isLoading}
        isLoadingText={t('auth_btn_loading') || ''}
      />
      <AuthLink
        text={t('already_have_an_account')}
        navigateText={t('auth_form_btn_text')}
        navigateTo="SignIn"
      />
    </OnboardingBackground>
  );
};
