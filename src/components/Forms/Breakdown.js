import React, { Component } from 'react';
import Consumer from '../../CostieProvider';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

class Breakdown extends Component {
  DURATION_15_MINS = 900;
  DURATION_30_MINS = 1800;
  DURATION_60_MINS = 3600;
  DURATION_120_MINS = 7200;

  durationCost = (currency, costPerSecond, duration) => `${currency} ${Math.floor(costPerSecond * duration)}`;

  render() {
    return (
      <Consumer>
        {({ context }) => {
          const { totalPerSecond } = context,
            currency = context.currencies.selected;

          return (
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{context.dictionary.labelCostBreakdown}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <List>
                  <ListItem>
                    <ListItemText
                      primary={context.dictionary.labelCostBreakdown15mins}
                      secondary={this.durationCost(currency, totalPerSecond, this.DURATION_15_MINS)}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={context.dictionary.labelCostBreakdown30mins}
                      secondary={this.durationCost(currency, totalPerSecond, this.DURATION_30_MINS)}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={context.dictionary.labelCostBreakdown60mins}
                      secondary={this.durationCost(currency, totalPerSecond, this.DURATION_60_MINS)}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={context.dictionary.labelCostBreakdown120mins}
                      secondary={this.durationCost(currency, totalPerSecond, this.DURATION_120_MINS)}
                    />
                  </ListItem>
                </List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        }}
      </Consumer>

    );
  };
};

export default Breakdown;