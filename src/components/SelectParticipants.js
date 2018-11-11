import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NativeSelect from '@material-ui/core/NativeSelect';
import Input from '@material-ui/core/Input';

class SelectParticipants extends Component {
  state = {
    participantsOptions: 21,
    participantsSelected: 0
  };

  participantsOptions = [...Array(this.state.participantsOptions).keys()];
  participants = this.participantsOptions.map(p => <option value={p} key={p}>{p}</option>);

  handleChange = e => {
    this.setState({
      participantsSelected: +e.target.value
    });
  };

  render() {
    return (
      <Card className="centered-card form">
        <Button variant="fab" aria-label="Currency" className="currency">
          &pound;
        </Button>
        <FormControl className="costie-form">
          <InputLabel htmlFor="uncontrolled-native">Number of participants</InputLabel>
          <NativeSelect defaultValue={0} input={<Input name="participants" id="uncontrolled-native" />} onChange={this.handleChange}>
            {this.participants}
          </NativeSelect>
        </FormControl>
        <Button variant="contained">Next</Button>
      </Card>
    );
  }
}

export default SelectParticipants;
