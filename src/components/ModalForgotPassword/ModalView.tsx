import { AiOutlineLoading } from 'react-icons/ai';
import { FaLockOpen } from 'react-icons/fa';

import { ModalViewProps } from './Modal.types';

export const ModalView = ({
  error,
  formErrors,
  handleSubmit,
  isLoading,
  onChangeIsForgotPassword,
  onSubmit,
  register,
}: ModalViewProps) => {
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-slate-800/75 transition-opacity"></div>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative bg-slate-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
          >
            <div className="bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-slate-200 sm:mx-0 sm:h-10 sm:w-10">
                  <FaLockOpen className="h-6 w-6 text-slate-800" />
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 className="text-lg leading-6 font-medium text-slate-200" id="modal-title">
                    Recover password account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-slate-500">
                      Are you sure you dont know the account password? This action cannot be undone.
                    </p>
                  </div>
                  <div className="mt-4">
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
                      <span className="text-rose-500 text-xs italic">
                        {formErrors.email.message}
                      </span>
                    )}
                    {error && (
                      <div className="flex items-center justify-center mt-6">
                        <span className="text-rose-500  text-xs italic">{error}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="submit"
                className="w-full inline-flex justify-center border border-transparent shadow-sm py-3 md:py-2 md:px-4 px-8 text-sm font-medium rounded-md text-slate-50 bg-gradient-to-br from-slate-700 to-slate-800 hover:bg-gradient-to-r hover:from-slate-800  hover:to-slate-700 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-700 sm:ml-3 sm:w-auto sm:text-sm"
              >
                {isLoading ? <AiOutlineLoading className="h-5 w-5 animate-spin" /> : 'RESET'}
              </button>
              <button
                onClick={onChangeIsForgotPassword}
                type="button"
                className="w-full inline-flex justify-center border border-transparent shadow-sm py-3 md:py-2 md:px-4 px-8 text-sm font-medium rounded-md text-slate-800 bg-gradient-to-br from-slate-100 to-slate-200 hover:bg-gradient-to-r hover:from-slate-200  hover:to-slate-100 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200 sm:ml-3 sm:w-auto sm:text-sm"
              >
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
