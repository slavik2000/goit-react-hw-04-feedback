import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, handleChangeFilter }) => {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name"
        value={value}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

// import PropTypes from 'prop-types';
// import { StyledLabel, StyledInput } from './Filter.styled';

// function Filter({ value, onChange }) {
//   return (
//     <StyledLabel>
//       Find contacts by name
//       <StyledInput
//         name="filter"
//         type="text"
//         value={value}
//         onChange={onChange}
//       />
//     </StyledLabel>
//   );
// }

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };

// export default Filter;
