import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../../utils/API';

export default class Nav extends Component {
  handleClick = () => {
    API.logoutUser()
      .then(() => this.props.checkLoginStatus());
  }

  render() {
    return (

      <nav>
        <div className="nav-wrapper">
          <Link to="/home" className="brand-logo left"><img alt="logo" src={ require('../../images/tripsy_noText.png') } width='60' height='40' /></Link>
          <button type="button" id="nav-mobile" className="right signOutLink btn-flat" onClick={this.handleClick}>
            SIGN OUT
          </button>
        </div>
      </nav>

    );
  }
}
