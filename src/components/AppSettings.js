import React, { Component } from 'react';
import Consumer from '../CostieProvider';
import Settings from '@material-ui/icons/Settings';
import LanguageSettings from './Settings/LanguageSettings';

class AppSettings extends Component {
  render() {
    return (
      <Consumer>
        {({ context, toggleSettings }) => (
          <React.Fragment>
            <Settings onClick={toggleSettings} />
            {context.settingsView && <LanguageSettings />}
          </React.Fragment>
        )}
      </Consumer>
    );
  };
};

export default AppSettings;