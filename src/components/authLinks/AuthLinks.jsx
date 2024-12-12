import { NavLink } from 'react-router-dom';
import css from './AuthLinks.module.css';

export const AuthLinks = () => {
  return (
    <div className={css.auth}>
      <NavLink className={css.link} to="/register">
        Sign Up
      </NavLink>
      <NavLink className={css.link} to="/login">
        Sign In
      </NavLink>
    </div>
  );
};
