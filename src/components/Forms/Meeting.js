import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavigateBefore from '@material-ui/icons/NavigateBefore';

class Meeting extends Component {
  state = {
    displayAmount: 0,
    secondsRun: 0,
    secondsDisplay: '00',
    minutesDisplay: '00',
    hoursDisplay: '00'
  };

  handleBackToStart = () => this.props.history.push('/');

  updateDisplayAmount = (totalPerSecond = 0) => {
    let displayAmount = (+this.state.displayAmount + totalPerSecond).toFixed(2),
      secondsRun = +this.state.secondsRun + 1,
      secondsDisplay = (secondsRun % 60).toString().padStart(2, '0'),
      minutesDisplay = (Math.floor(secondsRun / 60) % 60).toString().padStart(2, '0'),
      hoursDisplay = Math.floor(secondsRun / 3600).toString().padStart(2, '0');

    this.setState({ displayAmount, secondsRun, secondsDisplay, minutesDisplay, hoursDisplay });
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
          {this.state.hoursDisplay}:{this.state.minutesDisplay}:{this.state.secondsDisplay}
        </Typography>
        <Button variant="contained" onClick={this.beginTimer} id="begin-timer">Start</Button>
        <Button variant="contained" onClick={this.endTimer} id="end-timer" className="hidden">End</Button>
        <Button variant="contained" onClick={this.handleBackToStart} id="new-meeting" className="hidden">New</Button>
      </div>
    ) : (
        <React.Fragment>
          <div className="costie-form">Please select a number of participants.</div>
          <Button variant="contained" onClick={this.handleBackToStart} className="push-right normalise-left">
            <NavigateBefore className="before" /> Back
          </Button>
        </React.Fragment>
      );
  }
};

export default Meeting;
