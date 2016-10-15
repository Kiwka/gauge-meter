import React, { Component } from 'react';
import AppHolder from './App.styl.js';
import getData from './stores/gauge-store.js';
import AppHeader from './components/header.jsx';
import Error from './components/error.jsx';
import GaugeMeter from './components/gauge-meter.jsx';
import ReloadButton from './components/reload-button.styl.js';
import Warning from './components/warning.styl.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isError: false, data: {}};
  }

  refreshData() {
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

  componentDidMount() {
    this.refreshData();
  }

  render() {
    return (
      <AppHolder>
        <AppHeader/>
        {this.state.isError ? <Error data={this.state.data}/> : <GaugeMeter data={this.state.data}/> }
        <ReloadButton onClick={this.refreshData.bind(this)}>One more time!</ReloadButton>
        {!this.state.isError && !this.state.data.unit &&
          <Warning>Looks like you will win something in the magical country where currency is unicorns</Warning>}
      </AppHolder>
    );
  }
}

export default App;
