import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

class SelectParticipants extends Component {
  render() {
    const { participantsOptions } = this.props,
      participants = participantsOptions.map(p => <option value={p} key={p}>{p}</option>);

    return (
      <React.Fragment>
        <FormControl className="costie-form">
          <InputLabel htmlFor="uncontrolled-native">Number of participants</InputLabel>
          <NativeSelect defaultValue={0} input={<Input name="participants" id="uncontrolled-native" />} onChange={this.props.handleChange}>
            {participants}
          </NativeSelect>
        </FormControl>
        <Button variant="contained">Next</Button>
      </React.Fragment>
    );
  }
}

export default SelectParticipants;
