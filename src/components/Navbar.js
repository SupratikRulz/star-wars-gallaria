import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm sticky-top navbar-dark bg-dark">
        <div className="navbar-brand">Star Wars Gallaria</div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/people">People</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/films">Films</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
