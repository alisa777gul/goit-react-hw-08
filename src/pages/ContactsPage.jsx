import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactList from '../components/contactList/ContactList';
import ContactForm from '../components/contactForm/ContactForm';
import SearchBox from '../components/searchBox/SearchBox';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm /> <div>{isLoading && 'Request in progress...'}</div>
      <SearchBox />
      <ContactList />
    </>
  );
}
