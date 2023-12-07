import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/contactsSlice';
import { getContactsValue } from '../redux/contactsSlice';

export const Contacts = () => {
  const value = useSelector(getContactsValue);
  console.log(value);

  // function getContacts(state) {
  //   return state.contacts;
  //   console.log(state.contacts);
  // }

  const nameFromFilter = useSelector(state => state.filter);

  const visibleContacts = value.filter(item =>
    item.name.toLocaleLowerCase().includes(nameFromFilter.toLocaleLowerCase())
  );

  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        {visibleContacts.map(({ name, number, id }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              onClick={() => {
                dispatch(deleteContact(id));
              }}
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
