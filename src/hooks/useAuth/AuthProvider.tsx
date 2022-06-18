import { useEffect, useMemo, useState, useCallback } from 'react';

import { postLogin, postRegister, postToken } from '../../service/api';
import { AuthContext } from './AuthContext';
import { AuthProviderProps, ILogin, IRegister, IUser } from './types';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setIsLoading(true);
      const login = localStorage.getItem('isFirstLogin');
      if (login) {
        await postToken()
          .then((res) => {
            console.log(res);
            setUser(res.data.user);
            setToken(res.data.access_token);
          })
          .catch((error) => {
            setError(error.response.data.error);
          })
          .finally(() => {
            setIsLoading(false);
            setInitialLoading(false);
          });
      } else {
        setIsLoading(false);
        setInitialLoading(false);
      }
    };
    fetchUser();
  }, []);

  const signIn = useCallback(async (data: ILogin) => {
    setIsLoading(true);
    await postLogin(data)
      .then((res) => {
        setUser(res.data.user);
        setToken(res.data.access_token);
        localStorage.setItem('isFirstLogin', 'false');
      })
      .catch((error) => {
        setError(error.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
        setInitialLoading(false);
      });
  }, []);

  const signUp = useCallback(async (data: IRegister) => {
    setIsLoading(true);
    await postRegister(data)
      .then((res) => {
        setUser(res.data.user);
        setToken(res.data.access_token);
        localStorage.setItem('isFirstLogin', 'false');
      })
      .catch((error) => {
        setError(error.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
        setInitialLoading(false);
      });
  }, []);

  const logout = useCallback(async () => {
    setIsLoading(true);
    await postToken()
      .then(() => {
        setUser(null);
        setToken(null);
        localStorage.removeItem('isFirstLogin');
      })
      .catch((error) => {
        setError(error.response.data.error);
      })
      .finally(() => {
        setIsLoading(false);
        setInitialLoading(false);
      });
  }, []);

  const memoedValue = useMemo(
    () => ({ user, token, signUp, signIn, error, isLoading, logout }),
    [user, token, signUp, signIn, error, isLoading, logout]
  );

  return (
    <AuthContext.Provider value={memoedValue}>{!initialLoading && children}</AuthContext.Provider>
  );
};
