import React, { Component } from 'react';
import './App.css';
import AppHeader from './components/header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <p>
          Gauge meter will be here
        </p>
      </div>
    );
  }
}

export default App;
