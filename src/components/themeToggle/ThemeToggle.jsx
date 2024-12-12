import { FaMoon, FaSun } from 'react-icons/fa';
import css from './ThemeToggle.module.css';

const ThemeToggle = ({ currentTheme, setCurrentTheme }) => {
  const handleThemeToggle = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
  };

  return (
    <button className={css.toggleBtn} onClick={handleThemeToggle}>
      {currentTheme === 'dark' ? <FaMoon /> : <FaSun />}{' '}
    </button>
  );
};

export default ThemeToggle;
