import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SplitForm extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    console.log(e.target.value)
    if(e.target.value > 1){
      this.props.updateSplit(e.target.value);
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
          id='decrementSplit'
          onClick={this.props.decrementSplit}
          >
          -
          </button>
          <input
          id="split"
          type='text'
          onChange={this.onChange}
          value={this.props.tip}
          />
          <button
          id='incrementSplit'
          onClick={this.props.incrementSplit}
          >
          +
          </button>
        </div>
      </React.Fragment>
    )
  }
}

SplitForm.propTypes = {
  title: PropTypes.string,
  decrementSplit: PropTypes.func,
  incrementSplit: PropTypes.func,
  updateSplit: PropTypes.func,
}

export default SplitForm;
