import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormDataLogin } from './Login.types';
import { LoginView } from './LoginView';

const Login = (): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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

  const onChangeIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onSubmit = async (formLogin: FormDataLogin) => {
    try {
      console.log(formLogin);
      // TODO: call API to login user
    } catch (error) {
      toast.error(`Something went wrong with ${error}`);
    }
  };

  return (
    <LoginView
      onChangeIsPasswordVisible={onChangeIsPasswordVisible}
      isPasswordVisible={isPasswordVisible}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      formErrors={errors}
    />
  );
};

export default Login;
