import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends Component {
  render() {
    return (

      <nav>
        <div class="nav-wrapper">
          <Link to="/home" class="brand-logo left"><img alt="logo" src={ require('../../images/tripsy_noText.png') } width='60' height='40' /></Link>
          <ul id="nav-mobile" class="right">
            <li><Link to="/login">Sign Out</Link></li>
          </ul>
        </div>
      </nav>

    );
  }
}
