// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'; 
import './App.css';
import CoinTable from './components/coinTable/CoinTable';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';

class App extends Component<null, null> {
  
  render() {
    console.log(window.innerWidth)
    return (
      <Router>
        <Container fluid>
          <Route exact path='/' component={Header} />
          <Route exact path='/' component={Sidebar}/>
          <Route exact path='/' component={CoinTable}/>        
        </Container>
      </Router>
    );
  }
}

export default App;
