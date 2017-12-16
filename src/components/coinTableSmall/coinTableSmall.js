//@flow

import React, { Component } from 'react'
import CoinSmall from './coinSmall';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Table, Input } from 'reactstrap';
import * as coinActions from '../../redux/actions/coinAction';

type State = {
    filter: string,
    length: number
}

class CoinTableSmall extends Component<null, State> {

    state = {
        filter:'',
        length: 40
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
        let mappedCoins = this.props.coins.filter(coin => coin.long.toLowerCase().includes(this.state.filter.toLowerCase()))
        .map((coin) => <CoinSmall key={coin.short} coinData={coin}/>)
        .slice(0,40)      
        return (
        <div className='table-small'>
            <Input 
              onChange={this.onInputChange.bind(this)}
              placeholder='Search Coins'
            />
            <Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoinTableSmall);