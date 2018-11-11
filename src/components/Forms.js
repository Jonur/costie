import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SelectParticipants from './Forms/SelectParticipants';

class Forms extends Component {
  state = {
    participantsOptions: 21,
    participantsSelected: 0
  };

  participantsOptions = [...Array(this.state.participantsOptions).keys()];

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
        <SelectParticipants participantsOptions={this.participantsOptions} handleChange={this.handleChange} />
      </Card>
    );
  }
}

export default Forms;
