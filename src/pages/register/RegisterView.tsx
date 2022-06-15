import { AiOutlineLoading } from 'react-icons/ai';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import { RegisterProps } from './Register.types';

export const RegisterView = ({
  isPasswordVisible,
  onChangeIsPasswordVisible,
  ispasswordConfirmationVisible,
  onChangeIsPasswordConfirmationVisible,
  register,
  handleSubmit,
  onSubmit,
  formErrors,
  isLoading,
  error,
}: RegisterProps): JSX.Element => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-slate-900">
      <div className="max-w-sm w-full p-4 shadow rounded-lg bg-slate-800/25">
        <h1 className="text-4xl font-bold text-slate-100">Auth Register</h1>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="rounded-md shadow-sm space-y-2">
            <div>
              <label htmlFor="name" className="sr-only">
                Full name
              </label>
              <input
                type="text"
                {...register('fullname')}
                className="appearance-none rounded-none w-full border px-3 py-2 border-slate-600 placeholder-slate-500 text-slate-200 rounded-t-md focus:outline-none focus:ring-slate-200 focus:border-slate-400 focus:z-10 sm:text-sm"
                placeholder="Full Name"
              />
              {formErrors.fullname && (
                <span className="text-rose-500 text-xs italic">{formErrors.fullname.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                {...register('email')}
                type="email"
                className="appearance-none rounded-none w-full border px-3 py-2 border-slate-600 placeholder-slate-500 text-slate-200 rounded-t-md focus:outline-none focus:ring-slate-200 focus:border-slate-400 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
              {formErrors.email && (
                <span className="text-rose-500 text-xs italic">{formErrors.email.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                {...register('username')}
                type="text"
                className="appearance-none rounded-none w-full border px-3 py-2 border-slate-600 placeholder-slate-500 text-slate-200 rounded-t-md focus:outline-none focus:ring-slate-200 focus:border-slate-400 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
              {formErrors.username && (
                <span className="text-rose-500 text-xs italic">{formErrors.username.message}</span>
              )}
            </div>
            <div>
              <div className="relative">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register('password')}
                  type={isPasswordVisible ? 'text' : 'password'}
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
                <span className="text-rose-500 text-xs italic">{formErrors.password.message}</span>
              )}
            </div>
            <div>
              <label htmlFor="passwordConfirm" className="sr-only">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  {...register('passwordConfirmation')}
                  type={ispasswordConfirmationVisible ? 'text' : 'password'}
                  className="appearance-none rounded-none w-full border px-3 py-2 border-slate-600 placeholder-slate-500 text-slate-200 rounded-t-md focus:outline-none focus:ring-slate-200 focus:border-slate-400 focus:z-10 sm:text-sm"
                  placeholder="Confirm password"
                />
                {ispasswordConfirmationVisible ? (
                  <FaEyeSlash
                    className="absolute top-1/3 right-2 h-5 w-5 text-slate-400"
                    onClick={onChangeIsPasswordConfirmationVisible}
                  />
                ) : (
                  <FaEye
                    className="absolute top-1/3 right-2 h-5 w-5 text-slate-400"
                    onClick={onChangeIsPasswordConfirmationVisible}
                  />
                )}
              </div>
              {formErrors.passwordConfirmation && (
                <span className="text-rose-500 text-xs italic">
                  {formErrors.passwordConfirmation.message}
                </span>
              )}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <Link
              to="/login"
              className="font-light text-lg md:text-sm text-lime-200 hover:text-lime-800"
            >
              Already have an account? <span className="font-bold">Sign in</span>
            </Link>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 md:py-2 md:px-4 px-8 text-sm font-medium rounded-md text-slate-50 bg-gradient-to-br from-slate-700 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800  hover:to-slate-700 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FaLock className="h-5 w-5 text-slate-800 group-hover:text-slate-700" />
              </span>
              {isLoading ? <AiOutlineLoading className="h-5 w-5 animate-spin" /> : 'Sign Up'}
            </button>
          </div>
        </form>
        {error && (
          <div className="flex items-center justify-center mt-6">
            <span className="text-rose-500  text-xs italic">{error}</span>
          </div>
        )}
      </div>
    </div>
  );
};
