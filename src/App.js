import React, { Component } from 'react';
import AppHolder from './App.styl.js';
import getData from './stores/gauge-store.js';
import AppHeader from './components/header.jsx';
import Error from './components/error.jsx';
import GaugeMeter from './components/gauge-meter.jsx';
import ReloadButton from './components/reload-button.styl.js';
import Warning from './components/warning.styl.js';
import Loader from './components/loader.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {isError: false, data: {}, isLoading: true};
  }

  refreshData() {
    this.setState({isLoading: true});

    getData()
      .then(res => {
        if (res.error) {
          this.setState({
            isError: true,
            data: {},
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
      .then(() => this.setState({isLoading: false,}))
      .catch(() => {
        this.setState({
          isError: true,
          isLoading: false,
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
        {!this.state.isLoading ?
          <div>
            {this.state.isError ? <Error data={this.state.data}/> : <GaugeMeter data={this.state.data}/> }
            <ReloadButton onClick={this.refreshData.bind(this)}>One more time!</ReloadButton>
            {!this.state.isError && !this.state.data.unit &&
              <Warning>Looks like you will win something in the magical country where currency is unicorns</Warning>}
          </div> : <Loader />}
      </AppHolder>
    );
  }
}

export default App;
