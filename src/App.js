import React from 'react';
import AppSettings from './components/AppSettings';
import Titles from './components/Titles';
import Forms from './components/Forms';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      {/* <div className="settings">
        <AppSettings />
      </div> */}
      <div className="app">
        <Titles />
        <Forms />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
