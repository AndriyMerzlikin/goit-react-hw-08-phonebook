import { Nav, NavItem } from './authMenu.styled';

export const AuthNavigation = () => {
  return (
    <>
      <Nav>
        <NavItem to={'/'}></NavItem>
        <NavItem to={'/register'}>Registration</NavItem>
        <NavItem to={'/login'}>Login</NavItem>
      </Nav>
    </>
  );
};
