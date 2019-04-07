import React, { Component } from 'react';
import Bill from './components/Bill';
import TipForm from './components/TipForm';
import SplitForm from './components/SplitForm';
import Payment from './components/Payment';
import {functions} from './BusinessLogic';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      bill: 10,
      tip: 10,
      split: 2,
      payment: 0,
      server: '😐'
    }
    this.updateTip = this.updateTip.bind(this);
    this.updateBill = this.updateBill.bind(this);
    this.updateSplit = this.updateSplit.bind(this);
    this.incrementTip = this.incrementTip.bind(this);
    this.decrementTip = this.decrementTip.bind(this);
    this.incrementSplit = this.incrementSplit.bind(this);
    this.decrementSplit = this.decrementSplit.bind(this);
    this.outputResults = this.outputResults.bind(this);
    this.updateServer = this.updateServer.bind(this);
  }
  outputResults(bill, split, tip){
    const _tip = functions.calculateTip(bill, tip);
    const _splitTip = functions.splitBill(_tip, split);
    const _bill = functions.totalBill(bill, _tip);
    const _payment = functions.splitBill(_bill, split);
    return {
      tip: functions.formatTwoDecimalPlaces(_tip),
      splitTip: functions.formatTwoDecimalPlaces(_splitTip),
      payment: functions.formatTwoDecimalPlaces(_payment)
    }
  }
  updateTip(tip){
    this.setState({
      tip
    });
    // console.log('clicked')
  }
  updateBill(bill){
    this.setState({
      bill
    });
  }

  updateSplit(split){
    if (split >= 1){
      this.setState({
        split
      });
    }
  }
  updateServer(){
    const emojis = ['😢', '😐', '🙂', '😆'];
    let mood = emojis[1];
    if(this.state.tip <= 9){
      mood = emojis[0];
    }else if (this.state.tip >=20 && this.state.tip < 30){
      mood = emojis[2];
    }else if (this.state.tip >= 30){
      mood = emojis[3]
    }
    this.setState({
      server: mood
    });

  }

  incrementTip(){
    this.setState({
      tip: this.state.tip + 1
    }, () =>{
      this.updateServer();
    });
  }
  decrementTip(){
    if(this.state.tip >= 1){
      this.setState({
        tip: this.state.tip - 1
      }, () =>{
        this.updateServer();
      });
    }
  }
  incrementSplit(){
    this.setState({
      split: this.state.split + 1
    });
  }
  decrementSplit(){
    if(this.state.split >=2){
      this.setState({
        split: this.state.split - 1
      });
    }
  }
  render() {
    const results =  this.outputResults(this.state.bill, this.state.split, this.state.tip);

    return (
      <div className="container text-center">
      <h1>Tip Calculator</h1>
        <div className='row'>
          <Bill
          updateBill={this.updateBill}
          bill={this.state.bill}
          />
        </div>
       <div className='row'>
          <TipForm
            title='Tip:'
            tip={this.state.tip}
            updateTip={this.updateTip}
            incrementTip={this.incrementTip}
            decrementTip={this.decrementTip}
          />
        </div>
        <div className='row'>
          <SplitForm
            title='Split:'
            tip={this.state.split}
            updateSplit={this.updateSplit}
            incrementSplit={this.incrementSplit}
            decrementSplit={this.decrementSplit}
          />
        </div>
        <div className='row mt-5'>
          <Payment
            tip={results.tip}
            splitTip={results.splitTip}
            label="Results"
            payment={results.payment}
            server={this.state.server}
          />
        </div>
      </div>
    );
  }
}

export default App;
