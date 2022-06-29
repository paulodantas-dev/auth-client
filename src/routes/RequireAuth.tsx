import { Navigate, Outlet, useLocation } from 'react-router-dom';

export const RequireAuth = (): JSX.Element => {
  const token = false;

  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
};
