import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { FaSignOutAlt } from 'react-icons/fa'; // Importing Logout icon
import css from './User.module.css';

export const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      {/* Logout button with an icon */}
      <button
        type="button"
        onClick={() => dispatch(logout())}
        className={css.logoutButton}
        aria-label="Logout"
      >
        <FaSignOutAlt className={css.logoutIcon} />
      </button>
    </div>
  );
};
