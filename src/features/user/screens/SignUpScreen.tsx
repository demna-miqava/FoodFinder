import React from 'react';
import {OnboardingBackground, CustomInput} from '../components';
import {useSignUpForm} from '../hooks';
import {Button} from '@components/Button';
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
      <Button
        text={t('auth_form_btn_text')}
        onPress={onSubmit}
        styles={btnStyles}
        disabled={!isValid}
        isLoading={isLoading}
        isLoadingText={t('auth_btn_loading') || ''}
      />
    </OnboardingBackground>
  );
};

const btnStyles = {
  alignSelf: 'center',
  px: 25,
  py: 1,
  backgroundColor: '#000',
  borderRadius: 10,
  mt: 10,
};
