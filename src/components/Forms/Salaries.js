import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

const Salaries = ({ updateTotals, history, participants, currency }) => {
  const SALARY_DIGITS = 8,
    collectSalaries = () => [...document.querySelectorAll('input[id^="amount-"]')].reduce((sum, i) => sum + +i.value, 0);

  const handleClick = () => {
    const total = collectSalaries(),
      // (work hours per day) * (working days per week) * (weeks in a year) * (minutes in an hour) * (seconds in a minute)
      totalWorkedSecondsInYear = 7.5 * 5 * 52.1429 * 60 * 60,
      totalPerSecond = parseFloat((total / totalWorkedSecondsInYear).toFixed(2));

    updateTotals(total, totalPerSecond);
    history.push('/start-meeting');
  };

  const handleBackToStart = () => history.push('/');

  const handleInput = e => {
    e.target.value = +e.target.value.replace(/[^0-9]/g, '');
    e.target.value = Math.max(0, +e.target.value).toString().slice(0, SALARY_DIGITS);
  };

  const participantsOptions = [...Array(participants).keys()].map(p => {
    return (
      <FormControl key={p} fullWidth className="costie-form">
        <InputLabel htmlFor={'amount-' + p}>Salary {p + 1}</InputLabel>
        <Input
          id={'amount-' + p}
          type="password" pattern="[0-9]{8}" maxLength={SALARY_DIGITS} autoComplete="off" onInput={handleInput}
          startAdornment={<InputAdornment position="start">{currency}</InputAdornment>}
        />
      </FormControl>
    );
  });

  return participantsOptions.length ? (
    <React.Fragment>
      {participantsOptions}
      <div className="step-nav">
        <Button variant="outlined" className="outlined push-left normalise-left" onClick={handleBackToStart}>
          <NavigateBefore className="before" /> Back
          </Button>
        <Button variant="contained" onClick={handleClick} className="push-right normalise-right">
          Next <NavigateNext className="next" />
        </Button>
      </div>
    </React.Fragment>
  ) : (
      <React.Fragment>
        <div className="costie-form">Please select a number of participants.</div>
        <Button variant="contained" onClick={handleBackToStart} className="normalise-left">
          <NavigateBefore className="before" /> Back
          </Button>
      </React.Fragment>
    );
};

Salaries.propTypes = {
  currency: PropTypes.string,
  participants: PropTypes.number,
  updateTotals: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object
};

export default Salaries;
