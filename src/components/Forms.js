import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SelectParticipants from './Forms/SelectParticipants';
import Salaries from './Forms/Salaries';

class Forms extends Component {
  state = {
    participants: {
      options: 21,
      selected: 0
    }
  };

  participants = [...Array(this.state.participants.options).keys()];

  handleChange = e => {
    const newState = this.state;
    newState.participants.selected = +e.target.value;

    this.setState(newState);
  };

  render() {
    return (
      <Router>
        <Card className="centered-card form">
          <Button variant="fab" aria-label="Currency" className="currency">
            &pound;
          </Button>
          <Route exact path="/"
            render={props => <SelectParticipants {...props} participants={this.participants} handleChange={this.handleChange} />} />
          <Route path="/salaries"
            render={props => <Salaries {...props} participants={this.state.participants.selected} />} />
        </Card>
      </Router>
    );
  }
}

export default Forms;
