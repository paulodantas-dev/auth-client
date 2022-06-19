import { useForm } from 'react-hook-form';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormDataForgotPassword } from '../../pages/login/Login.types';
import { ModalProps } from './Modal.types';
import { ModalView } from './ModalView';

export const Modal = ({ onChangeIsForgotPassword, isLoading, error }: ModalProps) => {
  const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataForgotPassword>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formInput: FormDataForgotPassword) => {
    console.log(formInput);
    //todo
  };

  return (
    <ModalView
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      formErrors={errors}
      isLoading={isLoading}
      error={error}
      onChangeIsForgotPassword={onChangeIsForgotPassword}
    />
  );
};
