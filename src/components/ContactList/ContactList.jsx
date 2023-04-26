import Filter from 'components/Filter/Filter';
import ContactItem from './ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import {
  getContacts,
  getError,
  getFilter,
  getIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operation';

const ContactList = () => {
  const contactList = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const visibleContacts = useMemo(
    () =>
      contactList.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      ),
    [contactList, filter]
  );

  return (
    <ul>
      {visibleContacts.length !== 0 && <Filter />}
      {isLoading && !error && <b>Request in progress...</b>}
      {visibleContacts.map(({ id, name, phone }) => (
        <ContactItem key={id} id={id} name={name} phone={phone} />
      ))}
    </ul>
  );
};

export default ContactList;
