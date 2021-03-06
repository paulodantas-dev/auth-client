import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

import * as yup from 'yup';

import { yupResolver } from '@hookform/resolvers/yup';

import { FormDataRegister } from './Register.types';
import { RegisterView } from './RegisterView';

const Register = (): JSX.Element => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [ispasswordConfirmationVisible, setIsPasswordConfirmationVisible] = useState(false);

  const schema = yup.object().shape({
    fullname: yup
      .string()
      .min(4, 'Name must be at least 4 characters long')
      .max(50, 'Name must be less than 50 characters long')
      .required('Name is required'),
    username: yup
      .string()
      .min(2, 'User name must be at least 4 characters long')
      .max(16, 'User name must be less than 50 characters long')
      .required('User name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(20, 'Password must be at most 20 characters long')
      .required('Password is required'),
    passwordConfirmation: yup
      .string()
      .min(8, 'Password must be at least 8 characters long')
      .max(20, 'Password must be at most 20 characters long')
      .required('Password confirmation is required')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormDataRegister>({
    resolver: yupResolver(schema),
  });

  const onChangeIsPasswordVisible = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const onChangeIsPasswordConfirmationVisible = () => {
    setIsPasswordConfirmationVisible(!ispasswordConfirmationVisible);
  };

  const onSubmit = async (formRegister: FormDataRegister) => {
    try {
      console.log(formRegister);
      // TODO: call API to register user
    } catch (error) {
      toast.error(`Something went wrong with ${error}`);
    }
  };

  return (
    <RegisterView
      ispasswordConfirmationVisible={ispasswordConfirmationVisible}
      isPasswordVisible={isPasswordVisible}
      onChangeIsPasswordConfirmationVisible={onChangeIsPasswordConfirmationVisible}
      onChangeIsPasswordVisible={onChangeIsPasswordVisible}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      formErrors={errors}
    />
  );
};

export default Register;
