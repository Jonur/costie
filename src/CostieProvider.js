import React, { Component, createContext } from 'react';
import Dictionary from './services/dictionary';

const { Provider, Consumer } = createContext();

class CostieProvider extends Component {
  state = {
    language: 'english',
    dictionary: {},
    settingsView: false
  };

  toggleSettings = () => this.state.settingsView ? this.setState({ settingsView: false }) : this.setState({ settingsView: true });

  handleChangeLanguage = e => {
    const language = e.target.closest('li').id;

    this.setState({ language, dictionary: Dictionary[language] });
  };

  componentDidMount() {
    this.setState({ dictionary: Dictionary[this.state.language] });
  };

  render() {
    return (
      <Provider value={{
        context: this.state,
        toggleSettings: this.toggleSettings,
        handleChangeLanguage: this.handleChangeLanguage
      }}>
        {this.props.children}
      </Provider>
    );
  };
};

export { CostieProvider };
export default Consumer;