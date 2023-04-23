import ContactForm from './ContactForm';
import ContactList from './ContactList';

export default function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <ContactList />
    </div>
  );
}
