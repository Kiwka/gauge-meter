import React, {Component} from 'react';
import ErrorHolder from './error.styl.js';
import ServerOnFireImage from '../assets/server_on_fire.svg';
import MixDataImage from '../assets/mixed_data.png';

class Error extends Component {
  render() {
    let ServerOnFire = <div>
        <img src={ServerOnFireImage} />
        <div className="header">Server on fire</div>
      </div>;

    let DataError = <div>
        <img src={MixDataImage} />
        <div className="header">Looks like your fate mixed all data, it now makes no sense</div>
      </div>;

    return <ErrorHolder>
      {Object.keys(this.props.data).length ? DataError : ServerOnFire}
    </ErrorHolder>;
  }
};

export default Error;
