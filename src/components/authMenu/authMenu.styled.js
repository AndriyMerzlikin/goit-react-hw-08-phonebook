import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  font-size: x-large;
  text-decoration: none;
  font-weight: 400;
  color: #434455;
  display: inline-block;
  padding: 15px;
  border-radius: 5px;
  &:hover {
    background-color: black;
    color: orange;
  }
`;

export const Nav = styled.nav``;
