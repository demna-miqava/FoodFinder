import {useMutation} from 'react-query';
import {customAuthInstance} from './auth.instance';
import {SignUpFormValues} from '@features/user/types';

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
