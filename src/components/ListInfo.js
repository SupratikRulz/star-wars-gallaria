import React, { Component } from 'react';

import './css/ListInfo.css'

export default class ListInfo extends Component {
  render() {
    let {headerName, displayFormat, keysArr, jsonArr} = this.props,
      dataPresent = jsonArr.length > 0;

    return dataPresent && (
      <>
        <div className='info-header'>
          {headerName}
        </div>
        <div className='info'>
          {
            jsonArr.map((obj, index) => {
              let displayString = displayFormat;
              for(let key of keysArr) {
                displayString = displayString.replace('$_' + key, obj[key])
              }
              return (
                <div key={index+displayString}>
                  {displayString}
                </div>
              )
            })
          }
        </div>
      </>
    )
  }
}
