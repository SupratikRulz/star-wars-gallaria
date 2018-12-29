import React, { Component } from 'react';

import SearchBox from './SearchBox';
import SearchResultContainer from './SearchResultContainer';

import './css/People.css';

export default class People extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4 search-box-height'>
            <SearchBox />
          </div>
          <div className='col-8'>
            <SearchResultContainer />
          </div>
        </div>
      </div>
    )
  }
}
