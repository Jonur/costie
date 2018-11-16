import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import NavigateNext from '@material-ui/icons/NavigateNext';

const SelectParticipants = ({ participants, selected, handleChange, history }) => {
  const handleClick = () => history.push('/salaries'),
    participantsOptions = participants.map(p => p >= 2 ? <option value={p} key={p}>{p}</option> : false);

  return (
    <React.Fragment>
      <FormControl fullWidth className="costie-form">
        <InputLabel htmlFor="participants">Number of participants</InputLabel>
        <NativeSelect defaultValue={selected} input={<Input name="participants" id="participants" />} onChange={handleChange}>
          {participantsOptions}
        </NativeSelect>
      </FormControl>
      <Button variant="contained" onClick={handleClick} className="normalise-right">
        Next <NavigateNext className="next" />
      </Button>
    </React.Fragment>
  );
};

SelectParticipants.propTypes = {
  participants: PropTypes.array,
  selected: PropTypes.number,
  handleChange: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default SelectParticipants;
