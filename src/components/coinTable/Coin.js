import React, { Component } from 'react'
import _ from 'lodash';



class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        // this.cryptoSocket = new WebSocket('wss://coinzy-alpha.herokuapp.com/');
        // this.cryptoSocket.onmessage = (tradeMsg) => {
        //     console.log('message')
        //     let parsed = JSON.parse(tradeMsg.data)
        //      if(this.props.coinData.short === parsed.short){
        //          if(this.state.coin === undefined || _.isEqual(this.state.coin, parsed) === false){
        //                  this.setState({
        //                      coin: parsed
        //                  })
        //              }
        //          }
        //     }
        
    }


    componentWillUnmount(){
        console.log('unmounted', this.cryptoSocket);
        this.cryptoSocket.close();
      }

  render () {
      console.log('render', this.props.coinData.short)
      let coinData = this.props.coinData;
      let style = {
            textAlign:'right'
        }
        if(this.state.coin){
            return (
                <tr>
                    <td>{`${this.state.coin.long} (${this.state.coin.short})`}</td>
                    <td style={style}>${this.state.coin.mktcap.toLocaleString()}</td>
                    <td style={style}>${this.state.coin.price.toFixed(4).toLocaleString()}</td>
                    <td style={style}>${this.state.coin.vwapData.toFixed(4).toLocaleString()}</td>
                    <td style={style}>{this.state.coin.supply.toLocaleString()}</td>
                    <td style={style}>${this.state.coin.volume.toLocaleString()}</td>
                    <td style={style}>{this.state.coin.cap24hrChange}%</td>
                </tr>
              )
        } else {
            return (
            <tr>
                <td>{`${coinData.long} (${coinData.short})`}</td>
                <td style={style}>${coinData.mktcap.toLocaleString()}</td>
                <td style={style}>${coinData.price.toFixed(4).toLocaleString()}</td>
                <td style={style}>${coinData.vwapData.toFixed(4).toLocaleString()}</td>
                <td style={style}>{coinData.supply.toLocaleString()}</td>
                <td style={style}>${coinData.volume.toLocaleString()}</td>
                <td style={style}>{coinData.cap24hrChange}%</td>
            </tr>
            )
        }
  }
}

export default Coin;