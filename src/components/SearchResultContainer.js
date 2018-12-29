import React, { Component } from 'react';

import SearchResultCard from './SearchResultCard';

import './css/SearchResultContainer.css';

export default class SearchResultContainer extends Component {
  render() {
    return (
      <div className='row search-result-container'>
        <div>Search Results:</div>
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
        <SearchResultCard />
      </div>
    )
  }
}
