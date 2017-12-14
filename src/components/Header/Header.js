// @flow

import React, { Component } from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class CoinSideBar extends Component<null, null> {
  render () {
    return (
      <div className='Header' style={stylesheet}>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">coinProjectNameTBD</NavbarBrand>
      </Navbar>
    </div>
    )
  }
}

let stylesheet = {
  backgroundColor: 'green'
}

export default CoinSideBar;