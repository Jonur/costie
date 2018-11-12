import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Titles extends Component {
  handleClick = () => {
    window.location.href = '/';
  };

  render() {
    return (
      <React.Fragment>
        <Typography component="h1" variant="h3" align="center" className="white logo" onClick={this.handleClick}>
          Costie
      </Typography>
        <Typography component="h2" variant="h5" align="center" className="white">
          Time is money.
      </Typography>
      </React.Fragment >
    );
  }
};

export default Titles;
