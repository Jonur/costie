import React from 'react';
import Consumer from '../../CostieProvider';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import NavigateNext from '@material-ui/icons/NavigateNext';

const SelectParticipants = ({ history }) => {
  const handleClick = () => history.push('/salaries');

  return (
    <Consumer>
      {({ context, updateParticipants }) => {
        const participants = context.participants,
          participantsOptions = participants.options.map(p => p >= 2 ? <option value={p} key={p}>{p}</option> : false)

        return (
          <React.Fragment>
            <FormControl fullWidth className="costie-form">
              <InputLabel classes={{ focused: 'focused' }} htmlFor="participants">{context.dictionary.labelNumberOfParticipants}</InputLabel>
              <NativeSelect defaultValue={participants.selected} input={<Input name="participants" id="participants" />}
                onChange={updateParticipants}>
                {participantsOptions}
              </NativeSelect>
            </FormControl>
            <Button variant="contained" className="normalise-right" disabled={participants.selected < 2} onClick={handleClick}>
              {context.dictionary.buttonNext} <NavigateNext className="next" />
            </Button>
          </React.Fragment>
        );
      }}
    </Consumer>
  );
};

export default SelectParticipants;
