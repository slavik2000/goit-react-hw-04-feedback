// import PropTypes from 'prop-types';
// import { ListItem, StyledButton } from './ContactListItem.styled';

// function ContactItem({ id, name, number, onClick }) {
//   return (
//     <ListItem>
//       <p>
//         {name}: {number}
//       </p>
//       <StyledButton
//         type="button"
//         onClick={() => {
//           onClick(id);
//         }}
//       >
//         Delete
//       </StyledButton>
//     </ListItem>
//   );
// }

// ContactItem.propTypes = {
//   id: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   number: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
// };

// export default ContactListItem;



import PropTypes from 'prop-types';

import {
  ContactItem,
  ContactName,
  ContactNumber,
  Button,
} from './ContactListItem.styled';

export const ContactsListItem = ({ id, name, number, deleteContact }) => {
  return (
    <ContactItem key={id}>
      <ContactName>
        {name}:<ContactNumber>{number}</ContactNumber>
      </ContactName>
      <Button onClick={() => deleteContact(id)}>Delete</Button>
    </ContactItem>
  );
};

ContactsListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};