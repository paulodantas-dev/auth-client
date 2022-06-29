import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

export interface FormDataRegister {
  fullname: string;
  username: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export interface RegisterProps {
  onChangeIsPasswordVisible: () => void;
  isPasswordVisible: boolean;
  onChangeIsPasswordConfirmationVisible: () => void;
  ispasswordConfirmationVisible: boolean;
  register: UseFormRegister<FormDataRegister>;
  handleSubmit: UseFormHandleSubmit<FormDataRegister>;
  onSubmit: (data: FormDataRegister) => void;
  formErrors: FieldErrors<FormDataRegister>;
}
