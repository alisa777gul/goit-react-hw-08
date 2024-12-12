import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AuthLinks } from '../authLinks/AuthLinks';
import { User } from '../user/User';
import { FaHome, FaAddressBook } from 'react-icons/fa'; // Importing icons
import css from './Header.module.css';
import ThemeToggle from '../themeToggle/ThemeToggle';

export default function Header({ setCurrentTheme, currentTheme }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        {/* Conditionally render icons or text depending on screen size */}
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
      {isLoggedIn ? <User /> : <AuthLinks />}
      <ThemeToggle
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </header>
  );
}
