import * as Yup from 'yup';
import {EmailInputFieldError, PasswordInputFieldError} from '../../types';

const passwordRegex =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

export const useSignInValidation = () => {
  const getSignUpSchema = () =>
    Yup.object().shape({
      email: Yup.string()
        .required(EmailInputFieldError.REQUIRED)
        .email(EmailInputFieldError.INVALID),
      password: Yup.string()
        .required(PasswordInputFieldError.REQUIRED)
        .matches(passwordRegex, PasswordInputFieldError.INVALID),
    });

  return {getSignUpSchema};
};
