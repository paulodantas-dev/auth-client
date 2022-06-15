import axios, { AxiosResponse } from 'axios';

import { ILogin, IRegister, IResponse } from '../hooks/useAuth/types';

export const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const postLogin = async (data: ILogin): Promise<AxiosResponse<IResponse>> => {
  const response = await api.post('/api/login', data);
  return response;
};

export const postRegister = async (data: IRegister): Promise<AxiosResponse<IResponse>> => {
  const response = await api.post('/api/register', data);
  return response;
};

export const postToken = async (token: string): Promise<AxiosResponse<IResponse>> => {
  const response = await api.post('/api/refresh_token', { token });
  return response;
};
