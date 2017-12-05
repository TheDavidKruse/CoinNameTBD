import React, { Component } from 'react'
const io = require('socket.io-client');
const socket = io();



class Coin extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    componentDidMount(){
        const cryptoSocket = io.connect('https://coinzy-alpha.herokuapp.com/', {path: '/grape', transport: ['websocket']});
        cryptoSocket.on('trades', (tradeMsg) => {
            console.log('got message')
            if (this.props.coinData.short === tradeMsg.short){
                // console.log('updating coin', tradeMsg.coin)
              this.setState({
                  coin: tradeMsg
              })
              console.log('setting state')
          }
        })
        console.log('mounted', this.props.coinData.short)
    }

    // componentWillUnmount(){
    //     console.log('unmounted', this);
    //     socket.disconnect();
    //   }

  render () {
    //   console.log('render', this.props.coinData.short)
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