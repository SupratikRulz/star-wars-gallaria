import React, { Component } from 'react';

import SearchBox from './SearchBox';
import SearchResultContainer from './SearchResultContainer';

import { service } from './../services/api';

import './css/People.css';

export default class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchURI: 'https://swapi.co/api/people/?format=json',
      peopleResults: []
    }
  }

  componentDidMount() {
    service
      .get(this.state.fetchURI)
      .then(async data => {
        let characters = data.results,
          filteredCharacters = [];
        for(let _character of characters) {
          let characterObj = Object.assign({}, _character);
          for(let key in _character) {
            if(_character[key] instanceof Array) {
              for(let index = 0; index < _character[key].length; ++index) {
                let url = _character[key][index];
                let _urlData = await service.get(url);
                characterObj[key][index] = _urlData;
              }
            }
          }
          filteredCharacters.push(characterObj);
        }
        
        return {
          peopleResults: filteredCharacters,
          fetchURI: data.next
        }
      })
      .then(_data => {
        this.setState({
          peopleResults: [...this.state.peopleResults, ..._data.peopleResults],
          fetchURI: _data.fetchURI
        })
      })
  }

  render() {
    console.log(this.state.peopleResults)
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4 search-box-height'>
            <SearchBox />
          </div>
          <div className='col-8'>
            <SearchResultContainer characters={this.state.peopleResults}/>
          </div>
        </div>
      </div>
    )
  }
}
