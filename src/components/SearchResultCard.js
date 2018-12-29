import React, { Component } from 'react';

import ListInfo from './ListInfo';

import './css/SearchResultCard.css';

import {service} from './../services/api';

export default class SearchResultCard extends Component {
  constructor(props) {
    super(props);

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      expanded: false,
      films: [],
      vehicles: [],
      starships: []
    }
  }

  render() {
    let {
      name,
      birth_year,
      gender,
      height,
      mass,
      hair_color,
      skin_color,
      eye_color,
      films,
      vehicles,
      starships
    } = this.props;
    return (
      <div className='col-12 search-result-card'>
        <div className='search-result-card-container row'
          onMouseOver={this.mouseOverHandler}
          onMouseOut={this.mouseOutHandler} 
          onClick={this.clickHandler} 
        >
          <div 
            className='search-result-card-header col-12'>
            { name }
          </div>
          {
            this.state.expanded &&
              <div className='col-12 details'>
                <div className='info-header'>
                  Basic Information:
                </div>
                <p className='info'>
                  Birth Year: {birth_year}
                  <br></br>
                  Gender: {gender}
                  <br></br>
                  Height: {height}
                  <br></br>
                  Mass: {mass}
                  <br></br>
                  Hair Color: {hair_color}
                  <br></br>
                  Skin Color: {skin_color}
                  <br></br>
                  Eye Color: {eye_color}
                  <br></br>
                </p>
                <ListInfo
                  headerName={'Films appeared in:'}
                  displayFormat={'- $_title released on $_release_date and directed by $_director'}
                  keysArr={['title', 'release_date', 'director']}
                  jsonArr={films}
                />
                <ListInfo
                  headerName={'Vehicles Owned:'}
                  displayFormat={'- $_name with cargo capacity $_cargo_capacity'}
                  keysArr={['name', 'cargo_capacity']}
                  jsonArr={vehicles}
                />
                <ListInfo
                  headerName={'Starships Owned:'}
                  displayFormat={'- $_name with cargo capacity $_cargo_capacity'}
                  keysArr={['name', 'cargo_capacity']}
                  jsonArr={starships}
                />
              </div>
          }
        </div>
      </div>
    )
  }

  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  }

  mouseOverHandler = e => {
    !this.state.expanded && (e.target.parentElement.style.transform = 'scale(1.1)');
  }

  mouseOutHandler = e => {
    e.target.parentElement.style.transform = 'scale(1)';
  }

  clickHandler = e => {
    e.target.parentElement.style.transform = 'scale(1)';
    this.setState({expanded: !this.state.expanded});
  }
}
