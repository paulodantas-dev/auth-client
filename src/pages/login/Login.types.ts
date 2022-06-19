import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface FormDataLogin {
  email: string;
  password: string;
}

export interface FormDataForgotPassword {
  email: string;
}

export interface LoginProps {
  onChangeIsPasswordVisible: () => void;
  isPasswordVisible: boolean;
  register: UseFormRegister<FormDataLogin>;
  handleSubmit: UseFormHandleSubmit<FormDataLogin>;
  onSubmit: (data: FormDataLogin) => void;
  formErrors: FieldErrors<FormDataLogin>;
  isLoading: boolean;
  error: string | null;
  isForgotPassword: boolean;
  onChangeIsForgotPassword: () => void;
}
