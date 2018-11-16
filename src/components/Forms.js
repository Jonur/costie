import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SelectParticipants from './Forms/SelectParticipants';
import Salaries from './Forms/Salaries';
import Meeting from './Forms/Meeting';

class Forms extends Component {
  state = {
    total: 0,
    totalPerSecond: 0,
    participants: {
      options: 21,
      selected: 2
    },
    currencies: {
      options: [...'£€$₽¥₩₹'],
      selected: '£'
    }
  };

  participants = [...Array(this.state.participants.options).keys()];

  updateTotals = (total, totalPerSecond) => this.setState({ total, totalPerSecond });;

  handleChange = e => {
    const newState = this.state;
    newState.participants.selected = +e.target.value;

    this.setState(newState);
  };

  changeCurrency = () => {
    const newState = this.state,
      position = newState.currencies.options.indexOf(newState.currencies.selected),
      nextCurrency = (newState.currencies.options.length - 1) >= (position + 1) ? (position + 1) : 0;

    newState.currencies.selected = newState.currencies.options[nextCurrency];

    this.setState(newState);
  };

  render() {
    return (
      <Router>
        <Card className="centered-card form">
          <Button variant="fab" aria-label="Currency" className="currency" onClick={this.changeCurrency}>
            {this.state.currencies.selected}
          </Button>
          <Route exact path="/"
            render={props => <SelectParticipants {...props} participants={this.participants} handleChange={this.handleChange} />} />
          <Route path="/salaries"
            render={props => <Salaries {...props} participants={this.state.participants.selected} updateTotals={this.updateTotals}
              currency={this.state.currencies.selected} />} />
          <Route exact path="/start-meeting"
            render={props => <Meeting {...props} totalPerSecond={this.state.totalPerSecond} currency={this.state.currencies.selected} />} />
        </Card>
      </Router>
    );
  }
}

export default Forms;
