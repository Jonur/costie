import React, { Component } from 'react';
import { CostieProvider } from './CostieProvider';
import AppSettings from './components/AppSettings';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <CostieProvider>
        <AppSettings />
        <div className="app">
          <Titles />
          <Forms />
          <Footer />
        </div>
      </CostieProvider>
    );
  };
};

export default App;
