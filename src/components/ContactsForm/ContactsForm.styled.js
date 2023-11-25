import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 300px;
`;

export const StyledField = styled(Field)`
  padding: 4px;
  font: inherit;
`;

export const FormGroup = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  font-size: ;
`;
