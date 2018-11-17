import React, { Component } from 'react';
import Consumer from '../../CostieProvider';
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
    expanded: true
  };

  handleClick = () => this.state.expanded ? this.setState({ expanded: false }) : this.setState({ expanded: true });

  render() {
    return (
      <List>
        <ListItem button onClick={this.handleClick}>
          <ListItemIcon>
            <Language />
          </ListItemIcon>
          <ListItemText inset primary="Language" />
          {this.state.expanded ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Consumer>
          {({ context, handleChangeLanguage }) => (
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <List component="ul" disablePadding>
                <ListItem component="li" id="english" button onClick={handleChangeLanguage}>
                  {context.language === 'english' &&
                    <ListItemIcon>
                      <Done />
                    </ListItemIcon>}
                  <ListItemText inset primary="English" />
                </ListItem>
                <ListItem component="li" id="french" button onClick={handleChangeLanguage}>
                  {context.language === 'french' &&
                    <ListItemIcon>
                      <Done />
                    </ListItemIcon>}
                  <ListItemText inset primary="Français" />
                </ListItem>
                <ListItem component="li" id="greek" button onClick={handleChangeLanguage}>
                  {context.language === 'greek' &&
                    <ListItemIcon>
                      <Done />
                    </ListItemIcon>}
                  <ListItemText inset primary="Ελληνικά" />
                </ListItem>
              </List>
            </Collapse>
          )}
        </Consumer>

      </List>
    );
  };
};

export default LanguageSettings;