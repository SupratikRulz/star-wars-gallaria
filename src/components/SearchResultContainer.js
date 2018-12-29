import React, { Component } from 'react';

import SearchResultCard from './SearchResultCard';

import './css/SearchResultContainer.css';

export default class SearchResultContainer extends Component {
  render() {
    let {characters} = this.props;
    return (
      <div className='row search-result-container'>
        <div>Search Results:</div>
        {
          characters.map(_character => {
            return <SearchResultCard key={_character.name+_character.created}
              {..._character}
            />
          })
        }
      </div>
    )
  }
}
