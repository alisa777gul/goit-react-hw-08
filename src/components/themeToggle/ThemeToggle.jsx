import { FaMoon, FaSun } from 'react-icons/fa'; // Import icons
import css from './ThemeToggle.module.css';

const ThemeToggle = ({ currentTheme, setCurrentTheme }) => {
  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme); // Toggle theme state
  };

  return (
    <button className={css.toggleBtn} onClick={handleThemeToggle}>
      {currentTheme === 'dark' ? <FaMoon /> : <FaSun />}{' '}
    </button>
  );
};

export default ThemeToggle;
