import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import People from './components/People';
import Films from './components/Films';

import './App.css';

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
