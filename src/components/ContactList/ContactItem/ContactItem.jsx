import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';
import Notiflix from 'notiflix';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const removeContact = () => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} delete`);
  };
  return (
    <Contact id={id}>
      {name}: {number}{' '}
      <Button type="button" onClick={removeContact}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
