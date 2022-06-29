import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { LoginProps } from './Login.types';

export const LoginView = ({
  isPasswordVisible,
  onChangeIsPasswordVisible,
  formErrors,
  handleSubmit,
  onSubmit,
  register,
}: LoginProps): JSX.Element => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center bg-slate-900">
        <div className="max-w-sm w-full p-4 shadow rounded-lg bg-slate-800/25">
          <h1 className="text-4xl font-bold text-slate-100">Auth Login</h1>
          <form className="mt-6 space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-md shadow-sm space-y-2">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className="appearance-none rounded-none w-full border px-3 py-2 border-slate-600 placeholder-slate-500 text-slate-200 rounded-t-md focus:outline-none focus:ring-slate-200 focus:border-slate-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
                {formErrors.email && (
                  <span className="text-rose-500 text-xs italic">{formErrors.email.message}</span>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    {...register('password')}
                    className="appearance-none rounded-none w-full border px-3 py-2 border-slate-600 placeholder-slate-500 text-slate-200 rounded-t-md focus:outline-none focus:ring-slate-200 focus:border-slate-400 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  {isPasswordVisible ? (
                    <FaEyeSlash
                      className="absolute top-1/3 right-2 h-5 w-5 text-slate-400"
                      onClick={onChangeIsPasswordVisible}
                    />
                  ) : (
                    <FaEye
                      className="absolute top-1/3 right-2 h-5 w-5 text-slate-400"
                      onClick={onChangeIsPasswordVisible}
                    />
                  )}
                </div>

                {formErrors.password && (
                  <span className="text-rose-500 text-xs italic">
                    {formErrors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link
                to="/register"
                className="font-light text-lg md:text-sm text-lime-200 hover:text-lime-800"
              >
                Sign Up for free
              </Link>
              <button className="font-light text-lg md:text-sm text-lime-200 hover:text-lime-800">
                Forgot your password?
              </button>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 md:py-2 md:px-4 px-8 text-sm font-medium rounded-md text-slate-50 bg-gradient-to-br from-slate-700 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800  hover:to-slate-700 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <FaLock className="h-5 w-5 text-slate-800 group-hover:text-slate-700" />
                </span>
                Sign in
              </button>
            </div>
          </form>
          {/* {error && (
            <div className="flex items-center justify-center mt-6">
              <span className="text-rose-500  text-xs italic">{error}</span>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};
