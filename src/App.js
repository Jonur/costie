import React, { Component } from 'react';
import Titles from './components/Titles';
import SelectParticipants from './components/SelectParticipants';

class App extends Component {
  render() {
    return (
      <div className="app-titles">
        <Titles />
        <SelectParticipants />
      </div>
    );
  }
}

export default App;
