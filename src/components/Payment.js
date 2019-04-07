import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Payment extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='col-sm-12'>
          <span>Total Tip: <strong>{this.props.tip}</strong></span>
        </div>
        <div className='col-sm-12'>
          <span>Tip per person (included in payment): <strong>{this.props.splitTip}</strong></span>
        </div>
        <div className='col-sm-12'>
          <span>Total Payment per person: <strong>{this.props.payment}</strong></span>
        </div>
        <div className='col-sm-12'>
          <span
          className="emoji"
          role="img"
          aria-label={this.props.label ? this.props.label : ""}
          aria-hidden={this.props.label ? "false" : "true"}
          >
          <h1>{this.props.server}</h1>
          </span>
        </div>
      </React.Fragment>
    )
  }
}

Payment.proTypes ={
  tip: PropTypes.string.isRequired,
  payment: PropTypes.string.isRequired,
  splitTip: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
}
export default Payment;
