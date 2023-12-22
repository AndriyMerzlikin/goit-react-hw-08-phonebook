import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNavigation } from 'components/authMenu/authMenu';
import { useAuth } from 'components/hook';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return <header>{isLoggedIn ? <UserMenu /> : <AuthNavigation />}</header>;
};
