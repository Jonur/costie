import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="app-titles">
        <Typography component="h1" variant="h3" className="white logo" align="center">
          Costie
        </Typography>
        <Typography component="h2" variant="h5" className="white" align="center">
          Time is money.
        </Typography>
        <Card className="centered-card form">
          <Button variant="fab" aria-label="Currency" className="currency">
            &pound;
          </Button>
          <Typography color="textSecondary" gutterBottom>
            Replace me with the form
          </Typography>
        </Card>
      </div>
    );
  }
}

export default App;
