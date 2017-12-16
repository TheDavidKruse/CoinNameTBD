// @flow

import React, { Component } from 'react'
import _ from 'lodash';


type SingleCoin = {
        cap24hrChange: number,
        long:string, 
        mktcap:number,
        perc:number,
        price:number,
        shapeshift:boolean,
        short:string,
        supply:number,
        usdVolume:number,
        volume:number,
        vwapData:number,
        vwapDataBTC:number
}

type Props = {
    coinData: SingleCoin,
}

type State = {
    coin:SingleCoin
}

class Coin extends Component<Props, State> {
        state = {
            coin: {
                cap24hrChange: 0,
                long:'', 
                mktcap:0,
                perc:0,
                price:0,
                shapeshift:false,
                short:'',
                supply:0,
                usdVolume:0,
                volume:0,
                vwapData:0,
                vwapDataBTC:0
            }
        }

    componentDidMount(){
        this.cryptoSocket = new WebSocket(`wss://coinzy-alpha.herokuapp.com/`);
        this.cryptoSocket.onmessage = (tradeMsg: Object) => {
            let parsed = JSON.parse(tradeMsg.data)
             if(this.props.coinData.short === parsed.short){
                 if(this.state.coin === undefined || _.isEqual(this.state.coin, parsed) === false){
                    this.setState({
                        coin: parsed
                    })
                }
            }
        }
    }


    componentWillUnmount(){
        this.cryptoSocket.close();
    }

    render () {
      let coinData = this.props.coinData;
      let style = {
            textAlign:'right'
        }
        if(this.state.coin.long){
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