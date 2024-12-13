import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';
import { FaAddressBook, FaHome } from 'react-icons/fa';
import css from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={css.nav}>
      <NavLink className={css.link} to="/" aria-label="Home">
        <FaHome className={css.icon} />
        <span className={css.text}>Home</span>
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts" aria-label="Contacts">
          <FaAddressBook className={css.icon} />
          <span className={css.text}>Contacts</span>
        </NavLink>
      )}
    </nav>
  );
};
