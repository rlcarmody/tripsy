import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './Nav';
import MyTrips from './MyTrips';

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>

        <div className="container" id="home">
          <div className="row homeBanner jumbotron">
            <div className="col">
              <h2 className="headline" id="homeheadline">Tripsy Home Page</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Link to="/newtrip">
                <button type="button" className="btn">New Trip</button>
              </Link>
            </div>
          </div>

          <div className="row myTripsDiv">
            <MyTrips />
          </div>

        </div>
      </div>
    );
  }
}
export default Home;
