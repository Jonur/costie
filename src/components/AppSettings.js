import React, { Component } from 'react';
import Settings from '@material-ui/icons/Settings';
import LanguageSettings from './Settings/LanguageSettings';

class AppSettings extends Component {
  state = {
    open: true,
    language: 'English'
  };

  toggleSettings = () => this.state.open ? this.setState({ open: false }) : this.setState({ open: true });

  handleChangeLanguage = e => this.setState({ language: e.target.closest('li').id });

  render() {
    return (
      <React.Fragment>
        <Settings onClick={this.toggleSettings} />
        {this.state.open && <LanguageSettings handleChangeLanguage={this.handleChangeLanguage} language={this.state.language} />}
      </React.Fragment >
    );
  };
};

export default AppSettings;