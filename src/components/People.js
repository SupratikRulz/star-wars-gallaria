import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './../starwars-logo.png';
import SearchBox from './atomic/SearchBox';
import SearchResultHolder from './container/SearchResultHolderContainer';
import './css/People.css';

export default class People extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-4 search-box-height'>
            <img src={logo} alt='Star Wars' className='search-logo'/>
            <SearchBox
              updateSearchKey={this.props.updateSearch}
              searchTitle='Hey fellas! Search your favorite heros here.'
              placeholder='Search here...'
            />
          </div>
          <div className='col-8'>
            <SearchResultHolder/>
          </div>
        </div>
      </div>
    )
  }
}

People.propTypes = {
  updateSearch: PropTypes.func.isRequired
}
