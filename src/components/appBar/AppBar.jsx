import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { AuthNav } from '../authLinks/AuthNav';
import { UserMenu } from '../userMenu/UserMenu';
import css from './AppBar.module.css';
import ThemeToggle from '../themeToggle/ThemeToggle';
import { Navigation } from '../navigation/Navigation';

export default function AppBar({ setCurrentTheme, currentTheme }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <ThemeToggle
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
      />
    </header>
  );
}
