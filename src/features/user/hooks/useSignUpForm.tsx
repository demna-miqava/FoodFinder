import {useForm} from 'react-hook-form';
import {useSignUpValidation} from './useSignUpValidation';
import {yupResolver} from '@hookform/resolvers/yup';
import {User} from '@app/types';

export const useSignUpForm = () => {
  const {getSignUpSchema} = useSignUpValidation();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    watch,
  } = useForm<User>({
    resolver: yupResolver(getSignUpSchema()),
    mode: 'onChange',
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
    values: watch(),
  };
};
