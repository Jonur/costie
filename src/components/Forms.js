import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Consumer from '../CostieProvider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SelectParticipants from './Forms/SelectParticipants';
import Salaries from './Forms/Salaries';
import Meeting from './Forms/Meeting';

class Forms extends Component {
  render() {
    return (
      <Router>
        <Card className="centered-card form">
          <Consumer>
            {({ context, changeCurrency, updateTotals }) => (
              <React.Fragment>
                <Button variant="fab" aria-label="Currency" className="currency" onClick={changeCurrency}>
                  {context.currencies.selected}
                </Button>

                <Route exact path="/" component={SelectParticipants} />
                <Route path="/salaries"
                  render={props => <Salaries {...props} participants={context.participants.selected} updateTotals={updateTotals}
                    currency={context.currencies.selected} />} />
                <Route exact path="/start-meeting"
                  render={props => <Meeting {...props} totalPerSecond={context.totalPerSecond} currency={context.currencies.selected} />} />
              </React.Fragment>
            )}
          </Consumer>
        </Card>
      </Router>
    );
  }
}

export default Forms;
