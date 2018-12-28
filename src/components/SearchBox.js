import React, { Component } from 'react';

import './css/SearchBox.css';

export default class SearchBox extends Component {
  render() {
    return (
      <div className='search-box'>
        <p className='search-title'>Hey fellas! You can search your favorite characters here!</p>
        <input
          type='text'
          placeholder='Search here...'
          onFocus={(e) => e.target.placeholder = ""}
          onBlur={(e) => e.target.placeholder = "Search here..."}
        />
      </div>
    )
  }
}
