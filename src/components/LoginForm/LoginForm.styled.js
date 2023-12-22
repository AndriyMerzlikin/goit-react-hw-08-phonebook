import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 320px;
  background-color: whitesmoke;
  padding: 15px;
  box-shadow: -11px 11px 37px 7px rgba(81, 42, 42, 0.47);
`;

export const Title = styled.span`
  font-size: large;
  font-weight: 400;
  color: #434455;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;
export const Button = styled.button`
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    background-color: black;
    color: orange;
  }
`;
