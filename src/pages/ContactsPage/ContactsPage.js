import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';

export default function ContactsPage() {
  return (
    <div>
      <h1>Phone Boook</h1>
      <PhoneBook />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </div>
  );
}
