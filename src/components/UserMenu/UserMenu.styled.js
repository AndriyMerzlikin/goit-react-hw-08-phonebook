import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  font-size: x-large;
  text-decoration: none;
  font-weight: 600;
  color: #434455;
  display: inline-block;
  padding: 15px;
  border-radius: 5px;
  &:hover {
    background-color: black;
    color: orange;
  }
`;

export const Btn = styled.button`
  font-size: large;
  text-decoration: none;
  background-color: transparent;
  font-weight: 600;
  color: #434455;
  display: inline-block;
  padding: 15px;
  border: none;
  border-radius: 5px;
  &:hover {
    background-color: black;
    color: orange;
  }
`;

export const Text = styled.p`
  font-size: large;
  font-weight: 600;
  color: #434455;
  margin-right: 20px;
`;

export const Container = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
