import React, { Component } from 'react';

import SearchBox from './SearchBox';

export default class People extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4'>
            <SearchBox />
          </div>
          <div className='col-8'>Cards</div>
        </div>
      </div>
    )
  }
}
