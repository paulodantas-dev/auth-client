import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Loader } from '../../components/Loader/Loader';
import useAuth from '../../hooks/useAuth';
import { HomeView } from './HomeView';

const Home = (): JSX.Element => {
  const { user, isLoading, logout } = useAuth();

  if (isLoading) return <Loader />;

  if (!user) return <Navigate to="/login" />;

  const onLogout = () => {
    logout();
    toast.success('Successfully logged out');
  };

  return <HomeView logout={onLogout} user={user} />;
};

export default Home;
