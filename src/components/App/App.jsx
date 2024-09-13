
import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import {
  Container,
  Section,
  SectionsContainer,
  Title,
  SectionTitle,
  Message,
} from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);

  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };
    const normalizedName = name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${name} is already in contacts!`);
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filterContacts = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <Container>
      <Title>Phonebook</Title>
      <SectionsContainer>
        <Section>
          <SectionTitle>Add contact</SectionTitle>
          <ContactForm onSubmit={addContact} />
        </Section>
        <Section className="contacts">
          <SectionTitle>Contacts</SectionTitle>
          {contacts.length !== 0 ? (
            <>
              <Filter value={filter} onChange={filterContacts} />
              <ContactList
                contacts={filteredContacts}
                onDeleteButton={deleteContact}
              />
            </>
          ) : (
            <Message message="There are no contacts in your phonebook. Please add your first contact!">
              There are no contacts in your phonebook. Please add your first
              contact!
            </Message>
          )}
        </Section>
      </SectionsContainer>
    </Container>
  );
};

export default App;





// import React, { Component } from 'react';
// import { nanoid } from 'nanoid';
// import ContactForm from 'components/ContactForm';
// import Filter from 'components/Filter';
// import ContactList from 'components/ContactList';
// import {
//   Container,
//   Section,
//   SectionsContainer,
//   Title,
//   SectionTitle,
//   Message,
// } from './App.styled';

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   addContact = ({ name, number }) => {
//     const contact = { id: nanoid(), name, number };
//     const normalizedName = name.toLowerCase();

//     if (
//       this.state.contacts.find(
//         contact => contact.name.toLowerCase() === normalizedName
//       )
//     ) {
//       return alert(`${name} is already in contacts!`);
//     }

//     this.setState(prevState => ({
//       contacts: [contact, ...prevState.contacts],
//     }));
//   };

//   deleteContact = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   filterContacts = event => {
//     this.setState({ filter: event.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizedFilter = filter.toLowerCase();
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normalizedFilter)
//     );
//   };

//   render() {
//     const filteredContacts = this.getFilteredContacts();
//     const { addContact, filterContacts, deleteContact, state } = this;

//     return (
//       <Container>
//         <Title>Phonebook</Title>
//         <SectionsContainer>
//           <Section>
//             <SectionTitle>Add contact</SectionTitle>
//             <ContactForm onSubmit={addContact} />
//           </Section>
//           <Section className="contacts">
//             <SectionTitle>Contacts</SectionTitle>
//             {state.contacts.length !== 0 ? (
//               <>
//                 <Filter value={state.filter} onChange={filterContacts} />
//                 <ContactList
//                   contacts={filteredContacts}
//                   onDeleteButton={deleteContact}
//                 />
//               </>
//             ) : (
//               <Message message="There are no contacts in your phonebook. Please add your first contact!">
//                 {' '}
//                 There are no contacts in your phonebook. Please add your first
//                 contact!
//               </Message>
//             )}
//           </Section>
//         </SectionsContainer>
//       </Container>
//     );
//   }
// }

// export default App;