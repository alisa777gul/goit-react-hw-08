import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBox.module.css';
import { changeFilter } from '../../redux/filters/slice';
import { selectFilter } from '../../redux/filters/selectors';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.box}>
      <p className={style.name}>Find contacts</p>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={style.input}
        placeholder="Enter name or number"
      />
    </div>
  );
}
