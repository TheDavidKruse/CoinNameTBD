// @flow

import React, { Component } from 'react';
import {  Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class CoinSideBar extends Component<null, null> {
  render () {
    return (
      <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">coinProjectNameTBD</NavbarBrand>
      </Navbar>
    </div>
    )
  }
}

export default CoinSideBar;