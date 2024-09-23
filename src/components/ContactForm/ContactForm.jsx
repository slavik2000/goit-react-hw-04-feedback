// import React from 'react';
// import PropTypes from 'prop-types';
// import { Formik, ErrorMessage } from 'formik';
// import { object, string } from 'yup';
// import {
//   StyledLabel,
//   StyledForm,
//   StyledInput,
//   StyledButton,
// } from './ContactForm.styled';

// const initialValues = { name: '', number: '' };

// const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

// const numberRegex =
//   /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

// const schema = object().shape({
//   name: string()
//     .max(20)
//     .matches(nameRegex, {
//       message:
//         "Invalid name. Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan.",
//     })
//     .required(),
//   number: string()
//     .min(3)
//     .matches(numberRegex, {
//       message:
//         'Invalid number. Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
//     })
//     .required(),
// });

// function ContactForm({ onSubmit }) {
//   function handleSubmit(values, { resetForm }) {
//     onSubmit(values);
//     resetForm();
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <StyledForm>
//         <StyledLabel>
//           Name
//           <StyledInput
//             name="name"
//             type="text"
//             placeholder="Enter a contact name"
//           />
//           <ErrorMessage name="name">{msg => <div>{msg}</div>}</ErrorMessage>
//         </StyledLabel>
//         <StyledLabel>
//           Number
//           <StyledInput
//             name="number"
//             type="tel"
//             placeholder="Enter a contact number"
//           />
//           <ErrorMessage name="number">
//             {msg => <div className="message">{msg}</div>}
//           </ErrorMessage>
//         </StyledLabel>
//         <StyledButton type="submit">Add contact</StyledButton>
//       </StyledForm>
//     </Formik>
//   );
// }

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
// export default ContactForm;



import { useState } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Label, Button } from './ContactForm.styled';

export const ContactForm = ({ addContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        console.warn(`Field type name - ${name} is not handled`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    addContact({ name, number });

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={handleChange}
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter number"
          value={number}
          onChange={handleChange}
        />
      </Label>
      <Button type="submit" disabled={!name || !number}>
        Add contact
      </Button>
    </Form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};