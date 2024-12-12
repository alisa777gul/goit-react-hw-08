import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import { FaSignOutAlt } from 'react-icons/fa';
import css from './User.module.css';
import toast from 'react-hot-toast';

export const User = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>

      <button
        type="button"
        onClick={() =>
          dispatch(logout()).unwrap.then(toast.success('Goodbye!'))
        }
        className={css.logoutButton}
        aria-label="Logout"
      >
        <FaSignOutAlt className={css.logoutIcon} />
      </button>
    </div>
  );
};
