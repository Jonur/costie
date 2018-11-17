import React, { Component } from 'react';
import Consumer from '../CostieProvider';
import Settings from '@material-ui/icons/Settings';
import LanguageSettings from './Settings/LanguageSettings';

class AppSettings extends Component {
  render() {
    return (
      <Consumer>
        {({ context, toggleSettings }) => (
          <div className={context.settingsView ? 'settings expanded' : 'settings'}>
            <Settings onClick={toggleSettings} />
            {context.settingsView && <LanguageSettings />}
          </div>
        )}
      </Consumer>
    );
  };
};

export default AppSettings;