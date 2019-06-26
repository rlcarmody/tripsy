import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from '../layoutComponents/Nav';
import MyTrips from './TripDashboard/MyTrips';


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div className="container" id="home">
          <div className="row homeBanner jumbotron">
            <div className="col">
              <img alt="logo" src={ require('../../images/tripsy.PNG') } />
            </div>
            <div className="col">
              <h2 className="headline" id="homeheadline">Trips Made Easy!</h2>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <Link to="/NewTrip">
                <button type="button" className="btn">New Trip</button>
              </Link>
            </div>
          </div>

          <div className="row myTripsDiv">
            <MyTrips />
          </div>

        </div>
      </Fragment>
    );
  }
}
export default Home;
