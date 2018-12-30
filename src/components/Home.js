import React, { Component } from 'react';

import logo from './../starwars-logo.png';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <img src={logo} />
      </div>
    )
  }
}
