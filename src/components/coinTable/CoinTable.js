// @flow

import React, { Component } from 'react';
import { Table, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as coinActions from '../../redux/actions/coinAction';
import Coin from './Coin';


type State = {
  filter: string,
  maxNumCoins: number
}

class CoinTable extends Component<null, State> {

state = {
      filter: '',
      maxNumCoins: 40
  }

  componentWillMount(){
    this.props.coinActions.fetchCoinData();
  }

  onInputChange(e){
    if(e.target.value.length >= 1){
      this.setState({
        filter: e.target.value
      })
    } else {
      this.setState({
        filter: ''
      })
    }
  }

  render () {
    let style = {
      textAlign:'right'
  }
    let mappedCoins;
    if(this.props.coins === undefined || this.props.coins.length < 1){
      mappedCoins = 
        (
          <tr>
            <td>Loading...</td>
          </tr>
        )
    } else {
      mappedCoins = this.props.coins.filter(coin => coin.long.toLowerCase().includes(this.state.filter.toLowerCase()))
      .map((coin) => <Coin key={coin.short} coinData={coin}/>)
      .slice(0,40)
    }
    return (
      <div className='table-large'>
        <Input 
        placeholder='Search Coins'
        onChange={this.onInputChange.bind(this)}
        />
        <Table hover bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th style={style}>Market Cap</th>
              <th style={style}>Price</th>
              <th style={style}>24Hour VWAP</th>
              <th style={style}>Available Supply</th>
              <th style={style}>24Hour Volume</th>
              <th style={style}>%24hr</th>
            </tr>
          </thead>
          <tbody>
            {mappedCoins}
          </tbody>
        </Table>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    coins: state.coins
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    coinActions: bindActionCreators(coinActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CoinTable);