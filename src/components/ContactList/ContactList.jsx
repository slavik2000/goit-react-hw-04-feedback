// import PropTypes from 'prop-types';
// import ContactItem from 'components/ContactItem';
// import { List } from './ContactList.styled';

// function ContactList({ contacts, onDeleteButton }) {
//   return (
//     <List>
//       {contacts.map(({ id, name, number }) => {
//         return (
//           <ContactItem
//             key={id}
//             id={id}
//             name={name}
//             number={number}
//             onClick={onDeleteButton}
//           />
//         );
//       })}
//     </List>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
//   onDeleteButton: PropTypes.func.isRequired,
// };

// export default ContactList;


import PropTypes from 'prop-types';

import { ContactsListItem } from '../ContactListItem/ContactListItem';

import { ContactsList } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsListItem
          key={id}
          id={id}
          name={name}
          number={number}
          deleteContact={deleteContact}
        />
      ))}
    </ContactsList>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
  deleteContact: PropTypes.func,
};