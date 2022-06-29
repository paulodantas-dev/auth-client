import { lazy, Suspense } from 'react';
import { Route, Routes as Switch } from 'react-router-dom';

import { Loader } from '../components/Loader/Loader';
import { RequireAuth } from './RequireAuth';

const Login = lazy(() => import('../pages/login/Login'));
const Register = lazy(() => import('../pages/register/Register'));
const Home = lazy(() => import('../pages/home/Home'));

export const Routes = (): JSX.Element => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Switch>
    </Suspense>
  );
};
