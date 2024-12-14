import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { FaSignOutAlt } from 'react-icons/fa';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>

      <button
        type="button"
        onClick={() => dispatch(logOut())}
        className={css.logoutButton}
        aria-label="Logout"
      >
        <FaSignOutAlt className={css.logoutIcon} />
      </button>
    </div>
  );
};
