import React from 'react';
import {OnboardingBackground} from '../components/OnboardingBackground';
import {View} from 'native-base';
import {useSignUpForm} from '../hooks';
import {CustomInput} from '../components/CustomInput';
import {spaces} from '@app/theme';
import {User} from '@app/types';
import {Button} from '@components/Button';
import {useTranslation} from 'react-i18next';

export const SignUpScreen = () => {
  const {t} = useTranslation();
  const {control, handleSubmit, errors, isValid} = useSignUpForm();
  const onSubmit = (data: User) => {
    console.log('data', data);
  };

  return (
    <OnboardingBackground>
      <View w="100%" px={spaces[4]}>
        <CustomInput
          name="firstName"
          label={t('sign_up_form_first_name')}
          control={control}
          errors={errors}
        />
        <CustomInput
          name="lastName"
          label={t('sign_up_form_last_name')}
          control={control}
          errors={errors}
        />
        <CustomInput
          name="email"
          label={t('sign_up_form_email')}
          control={control}
          errors={errors}
        />
        <CustomInput
          name="password"
          label={t('sign_up_form_password')}
          type="text"
          control={control}
          errors={errors}
        />
        <Button
          text={t('sign_up_form_btn_text')}
          onPress={handleSubmit(onSubmit)}
          styles={btnStyles}
          disabled={!isValid}
          isLoading={false}
          isLoadingText={t('sign_up_btn_loading') || ''}
        />
      </View>
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
