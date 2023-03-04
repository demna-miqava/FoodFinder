export enum EmailInputFieldError {
  REQUIRED = 'auth_form_email_required',
  INVALID = 'auth_form_email_invalid',
}

export enum FirstNameInputFieldError {
  REQUIRED = 'auth_form_first_name_required',
  MINIMUM = 'auth_form_first_name_minimum',
}

export enum LastNameInputFieldError {
  REQUIRED = 'auth_form_last_name_required',
  MINIMUM = 'auth_form_last_name_minimum',
}

export enum PasswordInputFieldError {
  REQUIRED = 'auth_form_password_required',
  INVALID = 'auth_form_password_invalid',
}

export interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}
