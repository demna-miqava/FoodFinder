import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {useSignInReq} from '@app/api';
import {SignInFormValues} from '../../types';
import {userStorage} from '@helpers/';
import {useUser} from '@hooks/';
import {useSignInValidation} from './useSignInValidation';

export const useSignInForm = () => {
  const {getSignUpSchema} = useSignInValidation();
  const {mutateAsync, isLoading, isError, reset} = useSignInReq();
  const {authenticateUser} = useUser();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    watch,
  } = useForm<SignInFormValues>({
    resolver: yupResolver(getSignUpSchema()),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (payload: SignInFormValues) => {
    try {
      // FIX: ts issue
      const {token, refreshToken, user}: any = await mutateAsync(payload);
      reset();
      userStorage.setUserToken(token);
      userStorage.setRefreshToken(refreshToken);
      userStorage.setHasLoggedIn();
      authenticateUser(user);
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
