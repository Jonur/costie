import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

class Meeting extends Component {
  state = {
    displayAmount: 0
  };

  handleBackToStart = () => this.props.history.push('/');

  updateDisplayAmount = (totalPerSecond = 0) => {
    let displayAmount = (+this.state.displayAmount + totalPerSecond).toFixed(2);
    this.setState({ displayAmount });
  };

  beginTimer = () => {
    const { totalPerSecond } = this.props;

    this.timeout = setInterval(function () {
      this.updateDisplayAmount(totalPerSecond);
    }.bind(this), 1000);

    document.getElementById('begin-timer').classList.add('hidden');
    document.getElementById('end-timer').classList.remove('hidden');
  };

  endTimer = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    document.getElementById('end-timer').classList.add('hidden');
    document.getElementById('new-meeting').classList.remove('hidden');
  };

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    return this.props.totalPerSecond > 0 ? (
      <div className="costie-form">
        <Typography component="h1" variant="h3" align="center">
          {this.props.currency}{this.state.displayAmount}
        </Typography>
        <Typography component="h2" variant="h5" align="center" className="timer">
          00:00
        </Typography>
        <Button variant="contained" onClick={this.beginTimer} id="begin-timer">Start</Button>
        <Button variant="contained" onClick={this.endTimer} id="end-timer" className="hidden">End</Button>
        <Button variant="contained" onClick={this.handleBackToStart} id="new-meeting" className="hidden">New</Button>
      </div>
    ) : (
        <React.Fragment>
          <div className="costie-form">Please select a number of participants.</div>
          <Button variant="contained" onClick={this.handleBackToStart}>Begin</Button>
        </React.Fragment>
      );
  }
};

export default Meeting;
