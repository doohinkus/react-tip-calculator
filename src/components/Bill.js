import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Bill extends Component {
  constructor(props){
    super(props);
    this.state = {
      input:''
    }
    this.onChange = this.onChange.bind(this);
  }
  onChange(e){
    this.props.updateBill(e.target.value);
  }
  render() {
    return (
      <React.Fragment>
      <div className='col-sm-12'>
        <label>Bill Amount:</label>
      </div>
      <div className='col-sm-12'>
        <input
        id='bill'
        type='text'
        onChange={this.onChange}
        value={this.props.bill}
        />
      </div>
      </React.Fragment>
    )
  }
}

Bill.proTypes ={
  updateBill: PropTypes.func
}
export default Bill;
