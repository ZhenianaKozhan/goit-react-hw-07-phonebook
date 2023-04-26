import { Button } from 'components/ContactForm/ContactForm.styled';
import PropTypes from 'prop-types';
import { Contact } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { deleteContact } from 'redux/operation';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
    Notiflix.Notify.success(`Contact ${name} delete`);
  };

  return (
    <Contact id={id}>
      {name}: {phone}{' '}
      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;
