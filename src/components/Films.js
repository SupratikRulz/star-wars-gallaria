import React, { Component } from 'react';

import Card from './atomic/Card';
import Loader from './atomic/Loader';

import logo from './../starwars-logo.png';

import './css/Films.css';

export default class Films extends Component {
  render() {
    let films = this.props.films,
      dataLoaded = films.length > 0;
    return (
      <div className="container-fluid">
        <div className='row'>
          <div className='col-6 ml-auto mr-auto'>
            <img src={logo} className='logo' alt='Star Wars Logo'/>
          </div>
        </div>
        <div className='row' style={{padding: '10px'}}>
          {
            dataLoaded ? (
              films.map((_film, index) => {
                return  (
                        <div className='col-4 mt-20' key={_film.title + index}>
                          <Card
                            cardClasses='row p-10 m-10'
                            title={_film.title}
                            content={this.getFilmContent(_film)}
                          />
                        </div>
                );
              })
            ) : (
              <div className='col-12'>
                <Loader/>
              </div>
            )
          }
        </div>
      </div>
    )
  }

  getFilmContent = (film) => {
    return (
      <>
        <div className='film-description'>
          {film.opening_crawl}
        </div>
        <div className='director'>
          Director: {film.director}
        </div>
        <div className='producer'>
          Producer: {film.producer}
        </div>
        <div className='release-date'>
          Release Date: {film.release_date}
        </div>
      </>
    )
  }
}
