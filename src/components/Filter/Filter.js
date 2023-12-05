import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'components/redux/filterSlice';

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

// import { useDispatch, useSelector } from 'react-redux';
// import { onChangeName } from 'components/Redux/filterSlice';

// export const Filter = () => {
//   const element = useSelector(state => state.filter);
//   const dispatch = useDispatch();
//   return (
//     <Wrapper>
//       <EntryField>Find contacts by name</EntryField>
//       <input
//         type="text"
//         value={element.name}
//         onChange={evt => dispatch(onChangeName(evt.target.value))}
//         placeholder="Enter name plz"
//       />
//     </Wrapper>
//   );
// };

// Filter.propTypes = {
//   state: PropTypes.object,
//   onChangeName: PropTypes.func,
// };

// export const Filter = ({ filter, onUpdateFilter }) => {
//   return (
//     <div>
//       <h3>Find contacts by name</h3>
//       <input
//         type="text"
//         value={filter}
//         onChange={evt => onUpdateFilter(evt.target.value)}
//         placeholder="find name"
//       ></input>
//     </div>
//   );
// };
