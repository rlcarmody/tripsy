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
          <div className="row center-align">
            <div className="col s12">
              <img id='logo' alt="logo" src={ require('../../images/tripsy.PNG') } />
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <h2 className="headline" id="headline"><strong>Trippin' Made Easy</strong></h2>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <Link to="/NewTrip">
                <button type="button" className="newTripBtn">New Trip</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <h5><i class="fas fa-chevron-down"></i></h5>
              <h5 id="subHeadline">Your Upcoming Trips</h5>
              
            </div>
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
