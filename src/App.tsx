import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Routes } from './routes/routes';

export const App = (): JSX.Element => {
  return (
    <>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
      <ToastContainer
        position="bottom-right"
        theme="dark"
        pauseOnHover={false}
        autoClose={1000}
        closeButton={true}
      />
    </>
  );
};
