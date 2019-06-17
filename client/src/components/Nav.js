import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/home">Tripsy</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Link to="/login">Sign Out</Link>
          </ul>
        </div>
      </nav>
    );
  }
}
