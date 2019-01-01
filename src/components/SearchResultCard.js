import React, { Component } from 'react';
import {service} from './../services/api';
import PropTypes from 'prop-types';
import ListInfo from './atomic/ListInfo';
import Loader from './atomic/Loader';
import './css/SearchResultCard.css';

export default class SearchResultCard extends Component {
  constructor(props) {
    super(props);
    // Define the initial state of the component
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
    // When this component is mounted, then set this flag to true.
    this._mounted = true;
  }
  
  componentWillUnmount = () => {
    // When this component will dispose, then set this flag to false.
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
      <div className='col-12 search-result-card'
        style={{'display': show ? 'block': 'none'}}
        onClick={this.clickHandler}
      >
        <div className='search-result-card-container row'>
          <div 
            className='search-result-card-header col-12'>
            { name }
          </div>
          {
            // Display the character detail information if it's expanded state is true
            this.state.expanded &&
              <div className='col-12 details'>
                <ListInfo
                  headerName='Basic Information'
                  displayFormat='Born in $_birth_year with $_hair_color hair and $_skin_color skin. Gender is $_gender and currently height and mass is $_height and $_mass respectively.'
                  keysArr={['birth_year', 'gender', 'height', 'mass', 'hair_color', 'skin_color']}
                  jsonArr={[{
                    birth_year, gender, height, mass, hair_color, skin_color
                  }]}
                  separator='$_'
                />
                {
                  // If data is fetched then show the details else display the loader
                  dataFetched ?
                    (
                      <div>
                        <ListInfo
                          headerName={'Films appeared in:'}
                          displayFormat={'- $_title released on $_release_date and directed by $_director'}
                          keysArr={['title', 'release_date', 'director']}
                          jsonArr={films}
                          separator='$_'
                        />
                        <ListInfo
                          headerName={'Vehicles Owned:'}
                          displayFormat={'- $_name with cargo capacity $_cargo_capacity'}
                          keysArr={['name', 'cargo_capacity']}
                          jsonArr={vehicles}
                          separator='$_'
                        />
                        <ListInfo
                          headerName={'Starships Owned:'}
                          displayFormat={'- $_name with cargo capacity $_cargo_capacity'}
                          keysArr={['name', 'cargo_capacity']}
                          jsonArr={starships}
                          separator='$_'
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


  /**
   * Function to fetch data initially and toggle state of expand,
   * such that information of the character can be displayed or hidden.
   * 
   * @memberOf SearchResultCard
   */
  clickHandler = () => {
    !this.state.dataFetched && this.fetchDataAndUpdateState();
    this.setState({
      expanded: !this.state.expanded
    });
  }


  /**
   * Function to fetch the user data of
   * films appeared in, vehicles owned and starships owned.
   * On successful fetching of data, update the state of the component
   * such that re-fetching of data is not required when it's clicked again.
   * 
   * @memberOf SearchResultCard
   */
  fetchDataAndUpdateState = async () => {
    let {films, vehicles, starships} = this.props;
    let updatedFilms = [],
      updatedVehicles = [],
      updatedStarships = [];

    // Fetch the user data of films, vehicles and starships.
    for(let i = 0; i < films.length; ++i) {
      updatedFilms[i] = await service.get(films[i]);
    }
    for(let i = 0; i < vehicles.length; ++i) {
      updatedVehicles[i] = await service.get(vehicles[i]);
    }
    for(let i = 0; i < starships.length; ++i) {
      updatedStarships[i] = await service.get(starships[i]);
    }

    // Update the state of the component only when the component is mounted.
    // If for any reason the component gets disposed during fetching of data,
    // then do not update the state.
    this._mounted && this.setState({
      films: updatedFilms,
      vehicles: updatedVehicles,
      starships: updatedStarships,
      dataFetched: true
    });
  }
}

SearchResultCard.propTypes = {
  name: PropTypes.string,
  birth_year: PropTypes.string,
  gender: PropTypes.string,
  height: PropTypes.string,
  mass: PropTypes.string,
  hair_color: PropTypes.string,
  skin_color: PropTypes.string,
  show: PropTypes.bool.isRequired,
  films: PropTypes.array.isRequired,
  vehicles: PropTypes.array.isRequired,
  starships: PropTypes.array.isRequired
}
