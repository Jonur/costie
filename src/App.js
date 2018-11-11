import React, { Component } from 'react';
import Titles from './components/Titles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return (
      <div className="app-titles">
        <Titles />
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
