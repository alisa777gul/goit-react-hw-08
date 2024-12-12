import styles from './Contact.module.css';
import { IoPerson } from 'react-icons/io5';
import { IoCall } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <div className={styles.box}>
        <p className={styles.name}>
          <IoPerson className={styles.icon} />
          {contact.name}
        </p>
        <p className={styles.number}>
          <IoCall className={styles.icon} />
          {contact.number}
        </p>
      </div>
      <button className={styles.btn} onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
