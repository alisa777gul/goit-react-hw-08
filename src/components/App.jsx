/* eslint-disable no-unused-vars */
import './App.css';

import SearchBox from '../components/searchBox/SearchBox';
import ContactList from '../components/contactList/ContactList';
import ContactForm from '../components/contactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import { selectIsLoading, selectError } from '../redux/contacts/selectors';
import Header from './header/Header';

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <ContactList />
      </div>
    </>
  );
}

export default App;
