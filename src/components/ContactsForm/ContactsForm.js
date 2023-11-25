import { Formik } from 'formik';
import {
  StyledForm,
  StyledField,
  FormGroup,
  ErrorMsg,
} from './ContactsForm.styled';
import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{7}$/, 'Exactly 7 numbers')
    .required('Required'),
});

export const ContactsForm = ({ newContact }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        newContact(values);
        actions.resetForm();
      }}
    >
      <StyledForm>
        <FormGroup>Name</FormGroup>
        <StyledField
          id="name"
          type="text"
          name="name"
          placeholder="type name here"
          required
        />
        <ErrorMsg name="name" component={'span'} />

        <FormGroup>Number</FormGroup>
        <StyledField
          id="number"
          type="tel"
          name="number"
          placeholder="+380"
          required
        />
        <ErrorMsg name="number" component={'span'} />

        <button type="submit">Add contact</button>
      </StyledForm>
    </Formik>
  );
};
