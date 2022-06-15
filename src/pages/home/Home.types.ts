import { IUser } from '../../hooks/useAuth/types';

export interface IHome {
  logout: () => void;
  user: IUser;
}
