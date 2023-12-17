import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const element = useSelector(state => state.filter);
  const dispatch = useDispatch();
  console.log(element);
  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        type="text"
        value={element}
        onChange={evt => dispatch(updateFilter(evt.target.value))}
        placeholder="find name"
      ></input>
    </div>
  );
};
