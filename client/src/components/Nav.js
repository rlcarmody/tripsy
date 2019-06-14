import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Nav extends Component {


  render() {
    return (
        <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Tripsy</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <Link to='/login'>Sign Out</Link>
            
          </ul>
        </div>
      </nav>
          
    );
  }
}


