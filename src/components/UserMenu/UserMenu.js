import { useAuth } from 'components/hook';
import { useDispatch } from 'react-redux';
import { Btn, Container, NavItem, Text, Wrapper } from './UserMenu.styled';
import { logOut } from '../../Redux/Auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <Wrapper>
      <NavItem to={'/contacts'}>Contacts</NavItem>
      <Container>
        <Text>Welcome {user.name}!!!</Text>
        <Btn type="button" onClick={() => dispatch(logOut())}>
          Logout
        </Btn>
      </Container>
    </Wrapper>
  );
};
