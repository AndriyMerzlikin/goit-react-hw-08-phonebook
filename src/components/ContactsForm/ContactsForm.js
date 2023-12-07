import { Formik } from 'formik';
import { getContactsValue } from '../redux/contactsSlice';
import {
  StyledForm,
  StyledField,
  FormGroup,
  ErrorMsg,
} from './ContactsForm.styled';
import * as Yup from 'yup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d{7}$/, 'Exactly 7 numbers')
    .required('Required'),
});

export const ContactsForm = () => {
  const value = useSelector(getContactsValue);

  console.log(value);

  // function getContacts(state) {
  //   return state.contacts.contacts;
  //   // console.log(state.contacts);
  // }

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(values, actions) => {
        const existingContact = value.some(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        );
        if (existingContact) {
          Notify.failure('Contact already exists');
        } else {
          Notify.success('Contact ADD');
          dispatch(addContact(values));
          actions.resetForm();
        }
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
