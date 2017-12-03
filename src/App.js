import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IncentiveTable, { IncentiveRow } from './IncentiveTable.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Incentives</h2>
        </div>
        <IncentiveTable />
      </div>
    );
  }
}

export default App;
