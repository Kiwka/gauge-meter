import React, { Component } from 'react';
import './App.css';
import getData from './stores/gauge-store.js';
import AppHeader from './components/header.jsx';
import Error from './components/error.jsx';
import GaugeMeter from './components/gauge-meter.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isError: false, data: {}};
  }

  componentDidMount() {
    getData()
      .then(res => {
        if (res.error) {
          this.setState({
            isError: true,
          })
        } else {
          if (res.value > res.max || res.value < res.min || res.min > res.max) {
            this.setState({
              isError: true,
              data: res,
            })
          } else {
            this.setState({
              data: res,
              isError: false,
            })
          }
        }
      })
      .catch(() => {
        this.setState({
          isError: true,
        })
      });
  }

  render() {
    return (
      <div className="App">
        <AppHeader/>
        {this.state.isError ? <Error data={this.state.data}/> : <GaugeMeter data={this.state.data}/> }
      </div>
    );
  }
}

export default App;
