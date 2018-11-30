import React, { Component } from 'react';
import Consumer from '../../CostieProvider';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import NavigateBefore from '@material-ui/icons/NavigateBefore';
import NavigateNext from '@material-ui/icons/NavigateNext';

class Salaries extends Component {
  state = {
    error: false
  };

  SALARY_DIGITS = 9;

  collectSalaries = () => [...document.querySelectorAll('input[id^="amount-"]')].reduce((sum, i) => sum + +i.value, 0);

  handleBack = () => this.props.history.push('/');

  handleInput = e => {
    let value = +e.target.value.replace(/[^0-9]/g, '');

    if (String(e.target.value).match(/\d/g) && (String(e.target.value).match(/\d/g).length > this.SALARY_DIGITS)) {
      e.target.value = +e.target.value.toString().slice(0, -1);
    } else {
      e.target.value = value ? value : '';
    }
  };

  render() {
    return (
      <Consumer>
        {({ context, updateTotals }) => {
          const handleNext = () => {
            const total = this.collectSalaries(),
              // (work hours per day) * (working days per week) * (weeks in a year) * (minutes in an hour) * (seconds in a minute)
              totalWorkedSecondsInYear = 7.5 * 5 * 52.1429 * 60 * 60,
              totalPerSecond = parseFloat((total / totalWorkedSecondsInYear).toFixed(2));

            if ([...document.querySelectorAll('input[id^="amount-"]')].some(i => !i.value) || !totalPerSecond) {
              this.setState({ error: true });
              return false;
            } else {
              updateTotals(totalPerSecond);
              this.props.history.push('/start-meeting');
            }
          };

          const participantsOptions = [...Array(context.participants.selected).keys()].map(p => {
            return (
              <FormControl key={p} fullWidth className="costie-form reduce-spacing">
                <InputLabel classes={{ focused: 'focused' }} htmlFor={'amount-' + p}>{context.dictionary.labelSalary} {p + 1}</InputLabel>
                <Input
                  id={'amount-' + p}
                  autoFocus={p === 0}
                  type="tel" pattern="[0-9]{9}" maxLength={this.SALARY_DIGITS} autoComplete="off" onInput={this.handleInput}
                  startAdornment={<InputAdornment position="start">{context.currencies.selected}</InputAdornment>}
                />
              </FormControl>
            );
          });

          return participantsOptions.length ? (
            <React.Fragment>
              <Typography variant="caption" align="left" className="notification above">
                {context.dictionary.notificationSalariesSecondary}
              </Typography>

              {participantsOptions}

              {this.state.error && <Typography variant="caption" align="left" className="notification error below">
                {context.dictionary.notificationSalariesSecondaryError}
              </Typography>}

              <div className="step-nav">
                <div className="push-right">
                  <Button variant="contained" className="normalise-right" onClick={handleNext}>
                    {context.dictionary.buttonNext} <NavigateNext className="next" />
                  </Button>
                </div>
                <div className="push-left">
                  <Button variant="outlined" className="outlined normalise-left" onClick={this.handleBack}>
                    <NavigateBefore className="before" /> {context.dictionary.buttonBack}
                  </Button>
                </div>
              </div>
            </React.Fragment>
          ) : (
              <React.Fragment>
                <div className="costie-form">{context.dictionary.notificationParticipants}</div>
                <Button variant="contained" className="normalise-left" onClick={this.handleBack}>
                  <NavigateBefore className="before" /> {context.dictionary.buttonBack}
                </Button>
              </React.Fragment>
            );
        }}
      </Consumer >
    );
  };
};

export default Salaries;
