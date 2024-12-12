import { useDispatch, useSelector } from 'react-redux';
import style from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.box}>
      <p className={style.name}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        className={style.input}
        placeholder="Enter name"
      />
    </div>
  );
}
