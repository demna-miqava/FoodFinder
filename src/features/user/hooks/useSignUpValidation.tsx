import * as Yup from 'yup';
import {
  EmailInputFieldError,
  FirstNameInputFieldError,
  LastNameInputFieldError,
  PasswordInputFieldError,
} from '../types';

const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"/;

export const useSignUpValidation = () => {
  const getSignUpSchema = () => {
    Yup.object().shape({
      firstName: Yup.string()
        .required(FirstNameInputFieldError.REQUIRED)
        .min(3, FirstNameInputFieldError.MINIMUM),
      lastName: Yup.string()
        .required(LastNameInputFieldError.REQUIRED)
        .min(3, LastNameInputFieldError.MINIMUM),
      email: Yup.string()
        .required(EmailInputFieldError.REQUIRED)
        .email(EmailInputFieldError.INVALID),
      password: Yup.string()
        .required(PasswordInputFieldError.REQUIRED)
        .matches(passwordRegex, PasswordInputFieldError.INVALID),
    });
  };

  return {getSignUpSchema};
};
