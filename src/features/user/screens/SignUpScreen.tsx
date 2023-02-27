import React from 'react';
import {Text} from '@components/Typography';
import {OnboardingBackground} from '../components/OnboardingBackground';
import {View} from 'native-base';
import {useSignUpForm} from '../hooks';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {CustomInput} from '../components/CustomInput';
import {spaces} from '@app/theme';
import {User} from '@app/types';

export const SignUpScreen = () => {
  const {control, handleSubmit, errors} = useSignUpForm();
  const onSubmit = (data: User) => {
    console.log('data', data);
  };

  return (
    <OnboardingBackground>
      <View w="100%" px={spaces[4]}>
        <CustomInput
          name="firstName"
          label="First name"
          control={control}
          errors={errors}
        />
        <CustomInput
          name="lastName"
          label="Last name"
          control={control}
          errors={errors}
        />
        <CustomInput
          name="email"
          label="Email"
          control={control}
          errors={errors}
        />
        <CustomInput
          name="password"
          label="Password"
          type="password"
          control={control}
          errors={errors}
        />
        <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btn}>
          <Text>Sign up</Text>
        </TouchableOpacity>
      </View>
    </OnboardingBackground>
  );
};

const styles = StyleSheet.create({
  btn: {
    alignSelf: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    // temporary
    backgroundColor: '#2182BD',
    borderRadius: 10,
  },
});
