import React, { Component } from 'react';
import logo from './imgs/snapseed.svg';
import './App.css';

import Wellness from './Wellness';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">How are you feeling today?</h1>
        </header>
        <main>
          <Wellness></Wellness>
        </main>
      </div>
    );
  }
}

export default App;
