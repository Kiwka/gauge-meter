import React, {Component} from 'react';
import {getCurrencySymbol} from '../helpers/currency.js';
import GaugeMeterHolder from './gauge-meter.styl.js';

class GaugeMeter extends Component {
  getAngel(data) {
    return Math.trunc((data.value - data.min) * 180/(data.max - data.min));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.refs.needle.style.transform = `rotate(-${this.getAngel(nextProps.data)}deg)`;
    }
  }

  render() {
    let currencySymbol = getCurrencySymbol(this.props.data.unit);

    return <GaugeMeterHolder>
      <svg className="meter">
        <clipPath id="cut-off-bottom">
            <rect x="0" y="0" width="428" height="204" />
        </clipPath>
        <circle r="200" cx="225" cy="0" stroke="#000"
        strokeWidth="5" strokeDasharray="640, 943" fill="#FA891E"
        clipPath="url(#cut-off-bottom)" />
      <line className="needle" x1="0" y1="0" x2="220" y2="0" stroke="#000" strokeWidth="3" ref="needle"/>
      </svg>
      <svg width="450">
        <text x="0" y="20" fontFamily="sans-serif" fontSize="14px">{`${this.props.data.min} ${currencySymbol}`}</text>
        <text x="390" y="20" fontFamily="sans-serif" fontSize="14px">{`${this.props.data.max} ${currencySymbol}`}</text>
        <text x="200" y="20" fontFamily="sans-serif" fontSize="14px">{`${this.props.data.value}  ${currencySymbol}`}</text>
      </svg>
    </GaugeMeterHolder>;
  }
};

GaugeMeter.propTypes = {
  data: React.PropTypes.object,
};

export default GaugeMeter;
