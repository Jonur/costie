import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    return this.props.totalPerSecond > 0 ? (
      <div className="costie-form">
        <Typography component="h1" variant="h3" align="center">
          {this.props.currency}{this.state.displayAmount}
        </Typography>
        <Typography component="h2" variant="h5" align="center" className="timer">
          {this.state.hoursDisplay}:{this.state.minutesDisplay}:{this.state.secondsDisplay}
        </Typography>

        {this.state.button === 'begin' && <Button variant="contained" onClick={this.beginTimer}>Start</Button>}
        {this.state.button === 'end' && <Button variant="contained" onClick={this.endTimer}>End</Button>}
        {this.state.button === 'new' && <Button variant="contained" onClick={this.handleBackToStart}>New</Button>}

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Cost Breakdown</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <ListItem>
                <ListItemText
                  primary="15 mins"
                  secondary={this.props.currency + this.props.totalPerSecond * 900}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="30 mins"
                  secondary={this.props.currency + +this.props.totalPerSecond * 1800}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="1 hour"
                  secondary={this.props.currency + +this.props.totalPerSecond * 3600}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2 hours"
                  secondary={this.props.currency + +this.props.totalPerSecond * 7200}
                />
              </ListItem>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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
