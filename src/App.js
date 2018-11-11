import React, { Component } from 'react';
import Titles from './components/Titles';
import Forms from './components/Forms';

class App extends Component {
  render() {
    return (
      <div className="app-titles">
        <Titles />
        <Forms />
      </div>
    );
  }
}

export default App;
