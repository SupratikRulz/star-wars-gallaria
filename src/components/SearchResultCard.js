import React, { Component } from 'react';
import ListInfo from './atomic/ListInfo';
import Loader from './atomic/Loader';
import './css/SearchResultCard.css';
import {service} from './../services/api';

export default class SearchResultCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
      films: [],
      vehicles: [],
      starships: [],
      dataFetched: false
    };
    this._mounted = false;
  }

  componentDidMount = () => {
    this._mounted = true;
  }
  
  componentWillUnmount = () => {
    this._mounted = false;
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
                <ListInfo
                  headerName='Basic Information'
                  displayFormat='Born in $_birth_year with $_hair_color hair and $_skin_color skin. Gender is $_gender and currently height and mass is $_height and $_mass respectively.'
                  keysArr={['birth_year', 'gender', 'height', 'mass', 'hair_color', 'skin_color']}
                  jsonArr={[{
                    birth_year, gender, height, mass, hair_color, skin_color
                  }]}
                />
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

  clickHandler = () => {
    !this.state.dataFetched && this.fetchDataAndUpdateState();
    this.setState({
      expanded: !this.state.expanded
    });
  }

  fetchDataAndUpdateState = async () => {
    let {films, vehicles, starships} = this.props;
    let updatedFilms = [],
      updatedVehicles = [],
      updatedStarships = [];

    for(let i = 0; i < films.length; ++i) {
      updatedFilms[i] = await service.get(films[i]);
    }
    for(let i = 0; i < vehicles.length; ++i) {
      updatedVehicles[i] = await service.get(vehicles[i]);
    }
    for(let i = 0; i < starships.length; ++i) {
      updatedStarships[i] = await service.get(starships[i]);
    }

    this._mounted && this.setState({
      films: updatedFilms,
      vehicles: updatedVehicles,
      starships: updatedStarships,
      dataFetched: true
    });
  }
}
