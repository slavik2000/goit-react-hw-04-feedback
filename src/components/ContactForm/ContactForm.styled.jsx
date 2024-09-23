// import styled from '@emotion/styled';
// import { Form, Field } from 'formik';

// export const StyledForm = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;

//   gap: 30px;
//   width: 65%;
// `;

// export const StyledLabel = styled.label`
//   display: flex;
//   flex-direction: column;
//   gap: 18px;
//   div {
//     padding: 8px;
//     border: ${({ theme }) => {
//       return theme.buttonBorder;
//     }};
//     border-radius: ${({ theme }) => {
//       return theme.inputBorderRadius;
//     }};
//     background-color: #ffc4c4;
//     width: 288px;
//     font-size: 14px;
//     &::first-letter {
//       text-transform: uppercase;
//     }
//   }
// `;

// export const StyledInput = styled(Field)`
//   width: 300px;
//   height: 40px;
//   font-size: 16px;
//   border-radius: ${({ theme }) => {
//     return theme.inputBorderRadius;
//   }};
//   border: ${({ theme }) => {
//     return theme.buttonBorder;
//   }};
//   &::placeholder {
//     font-size: 16px;
//   }
// `;

// export const StyledButton = styled.button`
//   width: 150px;
//   height: 40px;
//   transform: scale(1);
//   background-color: ${({ theme }) => {
//     return theme.colors.buttonBackgroundColor;
//   }};
//   border-radius: ${({ theme }) => {
//     return theme.buttonBorderRadius;
//   }};
//   border: ${({ theme }) => {
//     return theme.buttonBorder;
//   }};

//   font-size: 16px;
//   transition: transform 250ms ease-out, background-color 250ms ease-out;
//   &:hover,
//   &:focus-visible {
//     transform: scale(1.1);
//   }
// `;

// export const MessageText = styled.p`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   font-size: 24px;
//   width: 500px;
//   height: 70px;
//   background-color: white;
//   border-radius: ${({ theme }) => {
//     return theme.inputBorderRadius;
//   }};
//   border: ${({ theme }) => {
//     return theme.buttonBorder;
//   }};
//   text-align: center;
// `;

import stylede from '@emotion/styled';

export const Form = stylede.form``;

export const Label = stylede.label`
  display: flex;
  flex-direction: column;
  margin-top: 0.25em;
`;

export const Input = stylede.input`
  width: 250px;
  padding: 5px;
  border-radius: 5px;
`;
export const Button = stylede.button`
  border-radius: 5px;
  margin-top: 0.5em;
  padding: 0.25em 1em;
  cursor: pointer;
`;