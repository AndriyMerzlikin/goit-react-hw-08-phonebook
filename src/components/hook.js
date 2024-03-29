import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUser,
} from '.././Redux/Auth/authSelectors';
import { useSelector } from 'react-redux';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return { isLoggedIn, isRefreshing, user };
};
