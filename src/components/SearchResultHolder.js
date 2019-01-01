import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchResultCard from './SearchResultCard';
import Loader from './atomic/Loader';
import './css/SearchResultContainer.css';

export default class SearchResultHolder extends Component {
  render() {
    let {characters, searchKey} = this.props,
      loadingCharacters = characters.length === 0;
    return (
      <>
      <div className='mt-50'>
        {
          // Show different texts for empty and valued search keys.
          searchKey ?
            <div>Searching for characters with "{searchKey}" in name</div> :
            <div>Showing All Characters</div>}
      </div>
      <div className='row search-result-container'>
        {
          // Show Loader component when characters are not fetched
          // else show the cards for each character.
          loadingCharacters ?
            (
              <>
                <div className='col-12 m-auto'> Fetching Characters from server...</div>
                <div className='col-12'><Loader /></div>
              </>
            ) :
            characters
              .map(_character => {
                // Show only the results whose name contains the search key
                let show = searchKey !== '' ? _character.name.toLowerCase().includes(searchKey) : true;
                return <SearchResultCard key={_character.name+_character.created+_character.mass} {..._character} show={show}/>
              })
        }
      </div>
      </>
    )
  }
}

SearchResultHolder.propTypes = {
  characters: PropTypes.array.isRequired,
  searchKey: PropTypes.string.isRequired
}
