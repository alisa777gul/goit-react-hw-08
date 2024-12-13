import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AuthNav } from '../authLinks/AuthNav';
import { User } from '../user/User';

import css from './Header.module.css';
import ThemeToggle from '../themeToggle/ThemeToggle';
import { Navigation } from '../navigation/Navigation';

export default function Header({ setCurrentTheme, currentTheme }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <User /> : <AuthNav />}
      <ThemeToggle
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </header>
  );
}
