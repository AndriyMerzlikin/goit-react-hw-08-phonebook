import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/service';
import { selectContacts, selectFilter } from '../../redux/selectors';

export const Contacts = () => {
  const value = useSelector(selectContacts);

  const nameFromFilter = useSelector(selectFilter);

  const visibleContacts = value.filter(item =>
    item.name.toLocaleLowerCase().includes(nameFromFilter.toLocaleLowerCase())
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
