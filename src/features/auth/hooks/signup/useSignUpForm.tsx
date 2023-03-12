import {useForm} from 'react-hook-form';
import {useSignUpValidation} from './useSignUpValidation';
import {yupResolver} from '@hookform/resolvers/yup';
import {User} from '@app/types';
import {useSignUpReq} from '@app/api';
import {SignUpFormValues} from '../../types';
import {userStorage} from '@helpers/';
import {useBasicToast, useUser} from '@hooks/';

interface SignUpResponse {
  message: string;
  token: string;
  refreshToken: string;
  user: User;
}

export const useSignUpForm = () => {
  const {getSignUpSchema} = useSignUpValidation();
  const {mutateAsync, isLoading, isError, reset} = useSignUpReq();
  const {authenticateUser} = useUser();
  const {showToast} = useBasicToast();
  const {
    control,
    handleSubmit,
    formState: {errors, isValid, isSubmitting},
    watch,
  } = useForm<SignUpFormValues>({
    resolver: yupResolver(getSignUpSchema()),
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (payload: SignUpFormValues) => {
    try {
      // FIX: ts issue
      const {token, refreshToken, user}: any = await mutateAsync(payload);
      userStorage.setUserToken(token);
      userStorage.setRefreshToken(refreshToken);
      userStorage.setHasLoggedIn();
      authenticateUser(user);
      reset();
      showToast({
        id: 'account_created',
        title: 'congratulations',
        message: 'your_account_has_been_created_successfully',
        status: 'success',
      });
    } catch (error: any) {
      showToast({
        id: 'sign_up_error',
        title: error?.message as string,
        message: '',
        status: 'error',
      });
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
