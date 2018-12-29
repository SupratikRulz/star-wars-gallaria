import React, { Component } from 'react';

import ListInfo from './ListInfo';

import './css/SearchResultCard.css';

export default class SearchResultCard extends Component {
  constructor(props) {
    super(props);

    this.mouseOverHandler = this.mouseOverHandler.bind(this);
    this.mouseOutHandler = this.mouseOutHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);

    this.state = {
      expanded: false
    }
  }

  render() {
    return (
      <div className='col-12 search-result-card'
        onMouseOver={this.mouseOverHandler}
        onMouseOut={this.mouseOutHandler} 
        onClick={this.clickHandler} 
      >
        <div className='search-result-card-container row'>
          <div 
            className='search-result-card-header col-12'
            onClick={this.toggleExpand}  
          >
            Random Name
          </div>
          {
            this.state.expanded &&
              <div className='col-12 details'>
                <ListInfo
                  headerName={'Sample Header'}
                  displayFormat={'- Today\'s temperature is  $_temp, and humidity is $_humidity'}
                  keysArr={['temp', 'humidity']}
                  jsonArr={[{
                    temp: '12',
                    humidity: '46',
                    xyz: 'sdsd'
                  }, {
                    temp: '23',
                    humidity: '24',
                    xyz: 'dsds'
                  }]}
                />
                <div className='info-header'>
                  Basic Information:
                </div>
                <p className='info'>
                  Birth Year: 
                  <br></br>
                  Gender: 
                  <br></br>
                  Height: 
                  <br></br>
                  Mass: 
                  <br></br>
                  Hair Color: 
                  <br></br>
                  Skin Color: 
                  <br></br>
                  Eye Color: 
                  <br></br>
                </p>
                <div className='info-header'>
                  Films appeared in:
                </div>
                <div className='info'>
                  1. The Empire Strikes Back released on props.releaseDate and directed by Irvin Kershner
                  <br></br>
                  2. The Empire Strikes Back released on props.releaseDate and directed by Irvin Kershner
                  <br></br>
                  3. The Empire Strikes Back released on props.releaseDate and directed by Irvin Kershner
                  <br></br>
                  4. The Empire Strikes Back released on props.releaseDate and directed by Irvin Kershner
                  <br></br>
                </div>
                <div className='info-header'>
                  Vehicles owned:
                </div>
                <div className='info'>
                  1. props.vehicles.name with cargo capacity number
                  <br></br>
                  2. props.vehicles.name with cargo capacity number
                  <br></br>
                  3. props.vehicles.name with cargo capacity number
                  <br></br>
                  4. props.vehicles.name with cargo capacity number
                  <br></br>
                </div>
                <div className='info-header'>
                  Starship owned:
                </div>
                <div className='info'>
                  1. props.vehicles.name with cargo capacity number
                  <br></br>
                  2. props.vehicles.name with cargo capacity number
                  <br></br>
                  3. props.vehicles.name with cargo capacity number
                  <br></br>
                  4. props.vehicles.name with cargo capacity number
                  <br></br>
                </div>
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
  }
}
