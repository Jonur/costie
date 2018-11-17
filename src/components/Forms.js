import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Consumer from '../CostieProvider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SelectParticipants from './Forms/SelectParticipants';
import Salaries from './Forms/Salaries';
import Meeting from './Forms/Meeting';

const Forms = () => {
  return (
    <Router>
      <Card className="centered-card form">
        <Consumer>
          {({ context, changeCurrency }) => (
            <React.Fragment>
              <Button variant="fab" aria-label="Currency" className="currency" onClick={changeCurrency}>
                {context.currencies.selected}
              </Button>

              <Route exact path="/" component={SelectParticipants} />
              <Route path="/salaries" component={Salaries} />
              <Route exact path="/start-meeting" component={Meeting} />
            </React.Fragment>
          )}
        </Consumer>
      </Card>
    </Router>
  );
};

export default Forms;
