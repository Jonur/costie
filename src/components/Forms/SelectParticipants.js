import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

class SelectParticipants extends Component {
  handleClick = () => {
    this.props.history.push('/salaries');
  };

  render() {
    const { participants } = this.props,
      participantsOptions = participants.map(p => <option value={p} key={p}>{p}</option>);

    return (
      <React.Fragment>
        <FormControl fullWidth className="costie-form">
          <InputLabel htmlFor="participants">Number of participants</InputLabel>
          <NativeSelect defaultValue={0} input={<Input name="participants" id="participants" />} onChange={this.props.handleChange}>
            {participantsOptions}
          </NativeSelect>
        </FormControl>
        <Button variant="contained" onClick={this.handleClick}>Next</Button>
      </React.Fragment>
    );
  }
}

export default SelectParticipants;
