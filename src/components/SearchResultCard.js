import React, { Component } from 'react';

import ListInfo from './ListInfo';
import Loader from './Loader';

import './css/SearchResultCard.css';

import {service} from './../services/api';

export default class SearchResultCard extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      expanded: false,
      films: [],
      vehicles: [],
      starships: [],
      dataFetched: false
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
      show
    } = this.props;
    let {
      films,
      vehicles,
      starships,
      dataFetched
    } = this.state;
    return (
      <div className='col-12 search-result-card' style={{'display': show ? 'block': 'none'}}
          onClick={this.clickHandler}
      >
        <div className='search-result-card-container row'>
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
                {
                  dataFetched ?
                    (
                      <div>
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
                    ) : (
                      <>
                        <div>Loading Data...</div>
                        <Loader/>
                      </>
                    )
                }
              </div>
          }
        </div>
      </div>
    )
  }

  toggleExpand = () => {
    this.setState({expanded: !this.state.expanded});
  }

  clickHandler = e => {
    !this.state.dataFetched && this.fetchDataAndUpdateState();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  fetchDataAndUpdateState = async () => {
    let {films, vehicles, starships} = this.props;
    let updatedFilms = [],
      updatedVehicles = [],
      updatedStarships = [],
      updatedFilmsFetched = true,
      updatedVehiclesFetched = true,
      updatedStarshipsFetched = true,
      allDataFetchedSuccessfully;
    for(let i = 0; i < films.length; ++i) {
      updatedFilms[i] = await service.get(films[i], {signal: this.signal}).catch(err => {console.log('Data fetching aborted'); updatedFilmsFetched = false;});
    }
    for(let i = 0; i < vehicles.length; ++i) {
      updatedVehicles[i] = await service.get(vehicles[i], {signal: this.signal}).catch(err => {console.log('Data fetching aborted'); updatedVehiclesFetched = false;});
    }
    for(let i = 0; i < starships.length; ++i) {
      updatedStarships[i] = await service.get(starships[i], {signal: this.signal}).catch(err => {console.log('Data fetching aborted'); updatedStarshipsFetched = false;});
    }

    allDataFetchedSuccessfully = updatedFilmsFetched && updatedVehiclesFetched && updatedStarshipsFetched;

    allDataFetchedSuccessfully && this.setState({
      films: updatedFilms,
      vehicles: updatedVehicles,
      starships: updatedStarships,
      dataFetched: true
    });
  }
}
