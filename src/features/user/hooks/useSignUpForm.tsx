import {useForm} from 'react-hook-form';
import {useSignUpValidation} from './useSignUpValidation';
import {yupResolver} from '@hookform/resolvers/yup';
import {User} from '@app/types';
import {useSignUpReq} from '@app/api';
import {SignUpReqPayload} from '../types';

export const useSignUpForm = () => {
  const {getSignUpSchema} = useSignUpValidation();
  const {mutateAsync, isLoading, isError, reset} = useSignUpReq();
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

  const onSubmit = async (payload: SignUpReqPayload) => {
    try {
      await mutateAsync(payload);
      reset();
    } catch (error) {
      // show errot toast
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    isLoading,
    isError,
    onSubmit: handleSubmit(onSubmit),
    values: watch(),
  };
};
