import React, { Component } from 'react';
import Consumer from '../../CostieProvider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import Breakdown from './Breakdown';

class Meeting extends Component {
  state = {
    displayAmount: 0,
    secondsRun: 0,
    secondsDisplay: '00',
    minutesDisplay: '00',
    hoursDisplay: '00',
    button: 'begin'
  };

  handleBackToStart = () => this.props.history.push('/');

  handleBackToSalaries = () => this.props.history.push('/salaries');

  updateDisplayAmount = (totalPerSecond = 0) => {
    let displayAmount = (+this.state.displayAmount + totalPerSecond).toFixed(2),
      secondsRun = +this.state.secondsRun + 1,
      secondsDisplay = (secondsRun % 60).toString().padStart(2, '0'),
      minutesDisplay = (Math.floor(secondsRun / 60) % 60).toString().padStart(2, '0'),
      hoursDisplay = Math.floor(secondsRun / 3600).toString().padStart(2, '0');

    this.setState({ displayAmount, secondsRun, secondsDisplay, minutesDisplay, hoursDisplay });
  };

  beginTimer = totalPerSecond => {
    this.timeout = setInterval(function () {
      this.updateDisplayAmount(totalPerSecond);
    }.bind(this), 1000);

    this.setState({ button: 'end' });
  };

  endTimer = () => {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    this.setState({ button: 'new' });
  };

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  render() {
    return (
      <Consumer>
        {({ context }) => {
          return context.totalPerSecond > 0 ? (
            <div className="costie-form">
              <Typography component="h1" variant="h3" align="center">
                {context.currencies.selected}{this.state.displayAmount}
              </Typography>
              <Typography component="h2" variant="h5" align="center" className="timer">
                {this.state.hoursDisplay}:{this.state.minutesDisplay}:{this.state.secondsDisplay}
              </Typography>

              {this.state.button === 'begin' && <Button variant="contained" onClick={() => this.beginTimer(context.totalPerSecond)}>
                {context.dictionary.buttonStart}</Button>}
              {this.state.button === 'end' && <Button variant="contained" onClick={this.endTimer}>
                {context.dictionary.buttonEnd}</Button>}
              {this.state.button === 'new' && <Button variant="contained" onClick={this.handleBackToStart}>
                {context.dictionary.buttonNew}</Button>}

              <Breakdown currency={context.currencies.selected} totalPerSecond={context.totalPerSecond} />
            </div>
          ) : (
              <React.Fragment>
                <div className="costie-form">{context.dictionary.notificationSalaries}</div>
                <Button variant="contained" onClick={this.handleBackToSalaries} className="push-right normalise-left">
                  <NavigateBefore className="before" /> {context.dictionary.buttonBack}
                </Button>
              </React.Fragment>
            );
        }}
      </Consumer>
    );
  };
};

export default Meeting;
