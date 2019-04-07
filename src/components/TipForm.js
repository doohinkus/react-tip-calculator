import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TipForm extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    if(e.target.value > 1){
      this.props.updateTip(e.target.value);
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className='col-sm-12'>
          <label>{this.props.title}</label>
        </div>
        <div className='col-sm-12'>
          <button
          id='decrementTip'
          onClick={this.props.decrementTip}
          >
          -
          </button>
          <input
          id="tip"
          type='text'
          onChange={this.onChange}
          value={this.props.tip}
          />
          <button
          id='incrementTip'
          onClick={this.props.incrementTip}
          >
          +
          </button>
        </div>
      </React.Fragment>
    )
  }
}


TipForm.propTypes = {
  title: PropTypes.string,
  decrementTip: PropTypes.func,
  incrementTip: PropTypes.func,
  updateBill: PropTypes.func,

}
export default TipForm;
