import { Navigate, Outlet, useLocation } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

export const RequireAuth = (): JSX.Element => {
  const { token } = useAuth();

  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
