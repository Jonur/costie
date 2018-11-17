import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Consumer from '../CostieProvider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import SelectParticipants from './Forms/SelectParticipants';
import Salaries from './Forms/Salaries';
import Meeting from './Forms/Meeting';
import Loop from '@material-ui/icons/Loop';

const Forms = () => {
  return (
    <Router>
      <Card className="centered-card form">
        <Consumer>
          {({ context, changeCurrency }) => (
            <React.Fragment>
              <Button variant="fab" aria-label="Currency" className="currency" onClick={changeCurrency}>
                {context.currencies.selected}
                <Loop className="loop" />
              </Button>
              <Switch>
                <Route path="/" exact component={SelectParticipants} />
                <Route path="/salaries" component={Salaries} />
                <Route path="/start-meeting" component={Meeting} />
                <Route component={SelectParticipants} />
              </Switch>
            </React.Fragment>
          )}
        </Consumer>
      </Card>
    </Router>
  );
};

export default Forms;
