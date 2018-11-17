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
          {({ context, handleChangeLanguage }) => {
            const languagesDOM = context.languages.map((lang, index) => {
              return (
                <ListItem key={index} component="li" id={lang} button onClick={handleChangeLanguage}>
                  {context.language === lang &&
                    <ListItemIcon>
                      <Done />
                    </ListItemIcon>}
                  <ListItemText inset primary={lang} />
                </ListItem>
              );
            });

            return (
              <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                <List component="ul" disablePadding>
                  {languagesDOM}
                </List>
              </Collapse>
            );
          }}
        </Consumer>

      </List>
    );
  };
};

export default LanguageSettings;