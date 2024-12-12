import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contacts/slice';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  if (!filteredContacts || filteredContacts.length === 0) {
    return <p>No contacts available</p>;
  }

  return (
    <ul className={styles.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={styles.element}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
