import React, {Component} from 'react';

class GaugeMeter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="holder">
      <svg className="meter">
        <clipPath id="cut-off-bottom">
            <rect x="0" y="0" width="408" height="204" />
        </clipPath>
        <circle r="200" cx="204" cy="0" stroke="#000"
        strokeWidth="5" strokeDasharray="640, 943" fill="#FA891E"
        clipPath="url(#cut-off-bottom)" />
      </svg>
    </div>;
  }
};

GaugeMeter.propTypes = {
  data: React.PropTypes.object,
};

export default GaugeMeter;
