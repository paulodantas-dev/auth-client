import { IHome } from './Home.types';

export const HomeView = ({ logout, user }: IHome): JSX.Element => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gradient-to-tl from-slate-800 to-slate-900 ">
      <div className="bg-slate-800 h-96 w-96 shadow rounded-md flex flex-col gap-12 items-center justify-center">
        <h1 className="text-4xl text-slate-200 font-semibold">Welcome Home</h1>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-slate-200">Name: {user.fullname}</span>
          <span className="font-semibold text-slate-200">Email: {user.email}</span>
          <span className="font-semibold text-slate-200">Username: {user.username}</span>
        </div>

        <button
          className="py-2 px-8 bg-slate-900 text-slate-100 rounded hover:bg-slate-100 hover:text-slate-900"
          onClick={logout}
        >
          LOGOUT
        </button>
      </div>
    </div>
  );
};
