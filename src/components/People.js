import React, { Component } from 'react';

import SearchBox from './atomic/SearchBox';
import SearchResultContainer from './SearchResultContainer';


import { service } from './../services/api';

import './css/People.css';
import logo from './../starwars-logo.png';

export default class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchURI: 'https://swapi.co/api/people/?format=json',
      peopleResults: [],
      searchKey: ''
    }
  }

  componentDidMount() {
    service
      .get(this.state.fetchURI)
      .then(async _data => {
        let infoObj = _data;
        if (infoObj) {
          let characters = [...infoObj.results];
          while (infoObj.next) {
            infoObj = await service.get(infoObj.next);
            infoObj && (characters = [...characters, ...infoObj.results]);
            this.setState({
              peopleResults: characters
            });
          }
        }
      });
  }

  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4 search-box-height'>
            <img src={logo} alt='Star Wars' className='search-logo'/>
            <SearchBox
              updateSearchKey={this.updateSearchKey}
              searchTitle='Hey fellas! Search your favorite heros here.'
              placeholder='Search here...'
            />
          </div>
          <div className='col-8'>
            <SearchResultContainer characters={this.state.peopleResults} searchKey={this.state.searchKey}/>
          </div>
        </div>
      </div>
    )
  }

  updateSearchKey = searchKey => {
    this.setState({searchKey})
  }
}
