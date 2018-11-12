import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

class Salaries extends Component {
  SALARY_DIGITS = 8;

  collectSalaries = () => [...document.querySelectorAll('input[id^="amount-"]')].reduce((sum, i) => sum + +i.value, 0);

  handleClick = () => {
    const total = this.collectSalaries(),
      // (work hours per day) * (working days per week) * (weeks in a year) * (minutes in an hour) * (seconds in a minute)
      totalWorkedSecondsInYear = 7.5 * 5 * 52.1429 * 60 * 60,
      totalPerSecond = parseFloat((total / totalWorkedSecondsInYear).toFixed(2));

    this.props.updateTotals(total, totalPerSecond);
    this.props.history.push('/start-meeting');
  };

  handleBackToStart = () => this.props.history.push('/');

  handleInput = e => {
    e.target.value = +e.target.value.replace(/[^0-9]/g, '');
    e.target.value = Math.max(0, +e.target.value).toString().slice(0, this.SALARY_DIGITS);
  };

  render() {
    const { participants, currency } = this.props,
      participantsOptions = [...Array(participants).keys()].map(p => {
        return (
          <FormControl key={p} fullWidth className="costie-form">
            <InputLabel htmlFor={'amount-' + p}>Salary {p + 1}</InputLabel>
            <Input
              id={'amount-' + p}
              type="password" pattern="[0-9]{8}" maxLength={this.SALARY_DIGITS} autoComplete="off" onInput={this.handleInput}
              startAdornment={<InputAdornment position="start">{currency}</InputAdornment>}
            />
          </FormControl>
        );
      });

    return participantsOptions.length ? (
      <React.Fragment>
        {participantsOptions}
        <Button variant="contained" onClick={this.handleClick}>Okay</Button>
      </React.Fragment>
    ) : (
        <React.Fragment>
          <div className="costie-form">Please select a number of participants.</div>
          <Button variant="contained" onClick={this.handleBackToStart}>Begin</Button>
        </React.Fragment>
      );
  }
}

export default Salaries;
