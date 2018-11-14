import React, { Component } from 'react';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Titles />
        <Forms />
        <Footer />
      </div>
    );
  }
}

export default App;
