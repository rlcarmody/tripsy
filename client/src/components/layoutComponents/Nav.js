import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/home"><img alt="logo" src={ require('../../images/tripsy_noText.png') } width='60' height='40' /></Link>
          <p id="nav-mobile" className="right signOutLink">
            <Link to="/login">SIGN OUT</Link>
          </p>
        </div>
      </nav>
    );
  }
}
