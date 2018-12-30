import React, { Component } from 'react';

import './css/Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className='lds-roller'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
