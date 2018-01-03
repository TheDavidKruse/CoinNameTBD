
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'; 
import './App.css';
import CoinTable from './components/coinTable/CoinTable';
import CoinTableSmall from './components/coinTableSmall/coinTableSmall'
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Loading from './components/Loading/Loading';

type State = {
  width: number
}
class App extends Component<null, State> {
  state= {
    width: 0
  }
  componentDidMount(){
    this.setState({
      width: window.innerWidth
    })
  }
  render() {
    window.onresize = (e) => {
      this.setState({
       width: e.currentTarget.innerWidth
      })
    }
    let routedComponents;
    if (this.state.width > 600){
      routedComponents = (
        <Container fluid>
            <Route exact path='/' component={Header}/>
            {/* <Route exact path='/' component={Sidebar}/> */}
            <Route exact path='/' component={CoinTable}/>  
        </Container>
      );
    } else if (this.state.width < 600){
      routedComponents = (
        <Container>
            <Route exact path='/' component={Header} />
            <Route exact path='/' component={CoinTableSmall}/>  
        </Container>
      );
    } else {
      routedComponents = <Loading/>
    }
    return (
      <div>
        <Router>
          <Container fluid>
          {routedComponents}
          </Container>
        </Router>
      </div>
    )
  }
}

  // const stylesheet = {
  //   backgroundColor: 'blue',
  //   width: 'auto'
  // }

export default App;
