import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Breakdown = ({ currency, totalPerSecond }) => {
  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>Cost Breakdown</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <List>
          <ListItem>
            <ListItemText primary="15 mins" secondary={currency + +totalPerSecond * 900}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="30 mins" secondary={currency + +totalPerSecond * 1800}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="1 hour" secondary={currency + +totalPerSecond * 3600}
            />
          </ListItem>
          <ListItem>
            <ListItemText primary="2 hours" secondary={currency + +totalPerSecond * 7200}
            />
          </ListItem>
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Breakdown.propTypes = {
  currency: PropTypes.string,
  totalPerSecond: PropTypes.number
};

export default Breakdown;