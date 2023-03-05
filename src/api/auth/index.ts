import {useMutation} from 'react-query';
import {customAuthInstance} from './auth.instance';
import {SignInFormValues, SignUpFormValues} from '@app/features/auth/types';

export const signUpReq = (payload: SignUpFormValues) => {
  return customAuthInstance({
    url: '/signup',
    method: 'POST',
    data: payload,
  });
};

export const useSignUpReq = () => {
  return useMutation(signUpReq);
};

export const signInReq = (payload: SignInFormValues) => {
  return customAuthInstance({
    url: '/signin',
    method: 'POST',
    data: payload,
  });
};

export const useSignInReq = () => {
  return useMutation(signInReq);
};
