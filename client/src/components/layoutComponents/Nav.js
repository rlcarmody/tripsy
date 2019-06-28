import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/home"><img alt="logo" src={ require('../../images/tripsy_noText.png') } width='60' height='40' />HOME</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <Link to="/login">SIGN OUT</Link>
          </ul>
        </div>
      </nav>
    );
  }
}
