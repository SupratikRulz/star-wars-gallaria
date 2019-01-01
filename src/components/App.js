import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Home from './Home';
import People from './People';
import Films from './container/FilmsContainer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/people' component={People}/>
            <Route path='/films' component={Films}/>
            <Redirect from='/' to='/home'/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
