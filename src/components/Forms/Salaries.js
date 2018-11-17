import React from 'react';
import Consumer from '../../CostieProvider';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

const Salaries = ({ history }) => {
  const SALARY_DIGITS = 8,
    collectSalaries = () => [...document.querySelectorAll('input[id^="amount-"]')].reduce((sum, i) => sum + +i.value, 0);

  const handleBack = () => history.push('/');

  const handleInput = e => {
    e.target.value = +e.target.value.replace(/[^0-9]/g, '');
    e.target.value = Math.max(0, +e.target.value).toString().slice(0, SALARY_DIGITS);
  };

  return (
    <Consumer>
      {({ context, updateTotals }) => {
        const handleNext = () => {
          const total = collectSalaries(),
            // (work hours per day) * (working days per week) * (weeks in a year) * (minutes in an hour) * (seconds in a minute)
            totalWorkedSecondsInYear = 7.5 * 5 * 52.1429 * 60 * 60,
            totalPerSecond = parseFloat((total / totalWorkedSecondsInYear).toFixed(2));

          updateTotals(totalPerSecond);
          history.push('/start-meeting');
        };

        const participantsOptions = [...Array(context.participants.selected).keys()].map(p => {
          return (
            <FormControl key={p} fullWidth className="costie-form">
              <InputLabel htmlFor={'amount-' + p}>{context.dictionary.labelSalary} {p + 1}</InputLabel>
              <Input
                id={'amount-' + p}
                type="password" pattern="[0-9]{8}" maxLength={SALARY_DIGITS} autoComplete="off" onInput={handleInput}
                startAdornment={<InputAdornment position="start">{context.currencies.selected}</InputAdornment>}
              />
            </FormControl>
          );
        });

        return participantsOptions.length ? (
          <React.Fragment>
            {participantsOptions}
            <div className="step-nav">
              <Button variant="outlined" className="outlined push-left normalise-left" onClick={handleBack}>
                <NavigateBefore className="before" /> {context.dictionary.buttonBack}
              </Button>
              <Button variant="contained" className="push-right normalise-right" onClick={handleNext}>
                {context.dictionary.buttonNext} <NavigateNext className="next" />
              </Button>
            </div>
          </React.Fragment>
        ) : (
            <React.Fragment>
              <div className="costie-form">{context.dictionary.notificationParticipants}</div>
              <Button variant="contained" className="normalise-left" onClick={handleBack}>
                <NavigateBefore className="before" /> {context.dictionary.buttonBack}
              </Button>
            </React.Fragment>
          );
      }}
    </Consumer>
  );
};

export default Salaries;
