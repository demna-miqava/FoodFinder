import {useForm} from 'react-hook-form';
import {useSignUpValidation} from './useSignUpValidation';
import {yupResolver} from '@hookform/resolvers/yup';

export const useSignUpForm = () => {
  const {getSignUpSchema} = useSignUpValidation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
  } = useForm({
    resolver: yupResolver(getSignUpSchema()),
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
  };
};
