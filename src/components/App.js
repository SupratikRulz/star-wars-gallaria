import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Home from './Home';
import People from './container/PeopleContainer';
import Films from './Films';
import './css/App.css';

class App extends Component {
  componentDidMount() {
  /**
   * Fetch the film and people data from server and
   * write to redux store when the app component is mounted.
   */
    this.props.fetchFilms();
    this.props.fetchCharacters();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {
            /* ||| Routes Definitions |||
            *  /       > will direct to Home component
            *  /home   > will direct to Home component
            *  /people > will direct to People component
            *  /films  > will direct to Film component
            *  /[xyz]  > any other routes will be automatically redirected to Home component
            */
          }
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home}/>
            <Route path={`${process.env.PUBLIC_URL}/home`} component={Home}/>
            <Route path={`${process.env.PUBLIC_URL}/people`} component={People}/>
            <Route path={`${process.env.PUBLIC_URL}/films`} render={() => <Films films={this.props.films}/>}/>
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  films: PropTypes.array.isRequired,
  fetchFilms: PropTypes.func.isRequired,
  fetchCharacters: PropTypes.func.isRequired
}

export default App;
