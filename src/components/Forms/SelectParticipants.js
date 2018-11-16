import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';
import NavigateNext from '@material-ui/icons/NavigateNext';

class SelectParticipants extends Component {
  handleClick = () => this.props.history.push('/salaries');

  render() {
    const { participants, selected } = this.props,
      participantsOptions = participants.map(p => p >= 2 ? <option value={p} key={p}>{p}</option> : false);

    return (
      <React.Fragment>
        <FormControl fullWidth className="costie-form">
          <InputLabel htmlFor="participants">Number of participants</InputLabel>
          <NativeSelect defaultValue={selected} input={<Input name="participants" id="participants" />} onChange={this.props.handleChange}>
            {participantsOptions}
          </NativeSelect>
        </FormControl>
        <Button variant="contained" onClick={this.handleClick} className="normalise-right">
          Next <NavigateNext className="next" />
        </Button>
      </React.Fragment>
    );
  }
}

export default SelectParticipants;
