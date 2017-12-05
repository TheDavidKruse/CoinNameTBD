import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap'; 
import './App.css'
import CoinTable from './components/coinTable/CoinTable';
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
        <Row>
          <Route path='/' component={Header} />
        </Row>
        <Row>
          <Route exact path='/' component={CoinTable}/>
        </Row>
        <Row>

        </Row>
        
        </Container>
      </Router>
    );
  }
}

export default App;
