import { Formik } from 'formik';
import { Button, FormStyled, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

const inithialValue = {
  name: '',
  number: '',
};

const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();

  const creatContact = (value, { resetForm }) => {
    const existingContact = contacts.some(
      contact => contact.name === value.name
    );
    if (existingContact) {
      Notiflix.Notify.failure(`${value.name} is already in contacts`);
    } else {
      dispatch(addContact(value));
      Notiflix.Notify.success('Add contacts');
    }

    resetForm();
  };
  return (
    <Formik initialValues={inithialValue} onSubmit={creatContact}>
      <FormStyled>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          // title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};

export default ContactForm;
