import {useMutation} from 'react-query';
import {customAuthInstance} from './auth.instance';
import {SignUpReqPayload} from '@features/user/types';

export const signUpReq = (payload: SignUpReqPayload) => {
  return customAuthInstance({
    url: '/signup',
    method: 'POST',
    data: payload,
  });
};

export const useSignUpReq = () => {
  return useMutation(signUpReq);
};
