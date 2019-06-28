import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Col, Row, Container } from '../layoutComponents/Grid';
import Nav from '../layoutComponents/Nav';
import MyTrips from './TripDashboard/MyTrips';


class Home extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Container id="home">
          <div className="row text-center">
            <div className="col-md-12">
              <img id='logo' alt="logo" src={ require('../../images/tripsy.PNG') } />
            </div>
          </div>
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 text-center">
              <h2 className="headline" id="headline"><strong>Trippin' Made Easy</strong></h2>
            </div>
            <div className="col-md-2" />
          </div>
          <div className="row">
            <div className="col-md-5" />
            <div className="col-md-1" className="text-center">
              <Link to="/NewTrip">
                <button type="button" className="newTripBtn">New Trip</button>
              </Link>
            </div>
            <div className="col-md-5" />
          </div>
          <div className="row">
            <div className="col-md-5" />
            <div className="col-md-1" className="text-center">
              <h4><i class="fas fa-chevron-down"></i></h4>
            </div>
            <div className="col-md-5" />
          </div>

          <div className="row myTripsDiv">
            <MyTrips setGlobalTrip={this.props.setGlobalTrip}/>
          </div>

        </Container>
      </Fragment>
    );
  }
}
export default Home;
