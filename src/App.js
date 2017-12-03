import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import logo from './logo.svg';
import './App.css';
import IncentiveTable, { IncentiveRow } from './IncentiveTable.js';
import { Button } from 'react-bootstrap';
import { IncentiveModal } from './NewIncentive.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Incentives</h2>
        </div>
        <p>
          <IncentiveTable />
        </p>
        <p>
          <Button onClick={renderModal} bsStyle="primary">Add Incentive</Button>&nbsp;
        </p>
        <div id="mountNode"></div>
      </div>
    );
  }
}

const mountNode = document.getElementById('mountNode');

function renderModal()
{
  ReactDOM.render(IncentiveModal, mountNode);
}

export default App;
export { mountNode };
