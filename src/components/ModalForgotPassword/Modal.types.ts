import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { FormDataForgotPassword } from '../../pages/login/Login.types';

export interface ModalViewProps {
  register: UseFormRegister<FormDataForgotPassword>;
  handleSubmit: UseFormHandleSubmit<FormDataForgotPassword>;
  onSubmit: (data: FormDataForgotPassword) => void;
  formErrors: FieldErrors<FormDataForgotPassword>;
  isLoading: boolean;
  error: string | null;
  onChangeIsForgotPassword: () => void;
}

export interface ModalProps {
  onChangeIsForgotPassword: () => void;
  isLoading: boolean;
  error: string | null;
}
