import React, { Component } from 'react';

import SearchResultCard from './SearchResultCard';
import Loader from './Loader';

import './css/SearchResultContainer.css';

export default class SearchResultContainer extends Component {
  render() {
    let {characters, searchKey} = this.props,
      loadingCharacters = characters.length === 0;
    return (
      <div className='row search-result-container'>
        {searchKey ? <div>Searching for characters with "{searchKey}" in name</div> : <div>Showing All Characters</div>}
        {
          loadingCharacters ?
            (
              <>
                <div className='col-12 m-auto'> Fetching Characters from server...</div>
                <div className='col-12'><Loader /></div>
              </>
            ) :
            characters
              .map(_character => {
                _character.show = searchKey !== '' ? _character.name.toLowerCase().includes(searchKey) : true;
                return <SearchResultCard key={_character.name+_character.created+_character.mass} {..._character}/>
              })
        }
      </div>
    )
  }
}