import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import People from './container/PeopleContainer';
import Films from './Films';

import './css/App.css';

class App extends Component {
  componentDidMount() {
    this.props.fetchFilms();
    this.props.fetchCharacters();
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/people' component={People}/>
            <Route path='/films' render={() => <Films films={this.props.films}/>}/>
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
