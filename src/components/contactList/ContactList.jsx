import { useSelector } from 'react-redux';
import Contact from '../contact/Contact';
import styles from './ContactList.module.css';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contacts/selectors';

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  if (
    (!filteredContacts && !isLoading) ||
    (filteredContacts.length === 0 && !isLoading)
  ) {
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
