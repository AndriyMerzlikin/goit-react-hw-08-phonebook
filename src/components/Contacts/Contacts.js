export const Contacts = ({ contactList, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contactList.map(contact => (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button onClick={() => onDeleteContact(contact.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
