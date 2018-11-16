import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import Language from '@material-ui/icons/Language';
import Done from '@material-ui/icons/Done';

class LanguageSettings extends Component {
  state = {
    open: true
  };

  handleClick = () => this.state.open ? this.setState({ open: false }) : this.setState({ open: true });

  render() {
    return (
      <List>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <Language />
          </ListItemIcon>
          <ListItemText inset primary="Language" />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          <List component="ul" disablePadding>
            <ListItem component="li" id="English" button onClick={this.props.handleChangeLanguage}>
              {this.props.language === 'English' &&
                <ListItemIcon>
                  <Done />
                </ListItemIcon>}
              <ListItemText inset primary="English" />
            </ListItem>
            <ListItem component="li" id="Greek" button onClick={this.props.handleChangeLanguage}>
              {this.props.language === 'Greek' &&
                <ListItemIcon>
                  <Done />
                </ListItemIcon>}
              <ListItemText inset primary="Ελληνικά" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  };
};

LanguageSettings.propTypes = {
  language: PropTypes.string,
  handleChangeLanguage: PropTypes.func
};

export default LanguageSettings;