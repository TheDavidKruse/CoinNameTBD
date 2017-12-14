// @flow

import React, { Component } from 'react';

class Sidebar extends Component<null, null> {
  render () {
    return (
      <div style={stylesheet} className='Sidebar'>
          <p>
              Hello, I am a sidebar.
          </p>
      </div>
    )
  }
}

let stylesheet = {
    backgroundColor: 'red'
}

export default Sidebar