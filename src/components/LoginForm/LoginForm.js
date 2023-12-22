import { useDispatch } from 'react-redux';
import { Button, Form, Label, Title } from './LoginForm.styled';
import { logIn } from '../../Redux/Auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { email, password } = e.currentTarget.elements;

    dispatch(
      logIn({
        email: email.value,
        password: password.value,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        <Title>Email</Title>
        <input type="email" name="email" />
      </Label>
      <Label>
        <Title>Password</Title>
        <input type="password" name="password" />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
