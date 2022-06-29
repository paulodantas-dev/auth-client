import 'react-toastify/dist/ReactToastify.css';
import 'tailwindcss/tailwind.css';

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { store } from 'app/store';

import { Routes } from './routes/routes';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};
