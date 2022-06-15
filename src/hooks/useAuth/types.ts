export interface IRegister {
  fullname: string;
  username: string;
  email: string;
  password: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IResponse {
  access_token: string;
  user: IUser;
}

export interface IUser {
  id: string;
  fullname: string;
  username: string;
  email: string;
}

export interface IAuth {
  user: IUser | null;
  token: string | null;
  signUp: (data: IRegister) => Promise<void>;
  signIn: (data: ILogin) => Promise<void>;
  logout: () => void;
  error: string | null;
  isLoading: boolean;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}
