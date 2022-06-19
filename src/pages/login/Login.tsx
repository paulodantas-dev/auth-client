import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import useAuth from '../../hooks/useAuth';
import { FormDataLogin } from './Login.types';
import { LoginView } from './LoginView';

const Login = (): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const { isLoading, signIn, error, user } = useAuth();

  const schema = yup.object().shape({
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup.string().required('Password is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataLogin>({
    resolver: yupResolver(schema),
  });

  const onChangeIsForgotPassword = () => {
    setIsForgotPassword(!isForgotPassword);
  };

  const onChangeIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (formLogin: FormDataLogin) => {
    try {
      await signIn(formLogin);
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  if (user) return <Navigate to="/" />;

  return (
    <LoginView
      onChangeIsPasswordVisible={onChangeIsPasswordVisible}
      isPasswordVisible={isPasswordVisible}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      formErrors={errors}
      isLoading={isLoading}
      error={error}
      onChangeIsForgotPassword={onChangeIsForgotPassword}
      isForgotPassword={isForgotPassword}
    />
  );
};

export default Login;
