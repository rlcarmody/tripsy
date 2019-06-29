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
        <Nav checkLoginStatus={this.props.checkLoginStatus} />
        <Container id="home">
          <div className="row center-align">
          <div className="col s12">
              <img id='logo' alt="logo" src={ require('../../images/tripsy.PNG') } />
            </div>
          </div>
          <div className="row">
            <div className="col s2" />
            <div className="col s8 center-align">
              <h2 className="headline" id="headline"><strong>Trippin' Made Easy</strong></h2>
            </div>
            <div className="col s2" />
          </div>
          <div className="row">
            <div className="col s1 offset-s5" className="center-align">
              <Link to="/NewTrip">
                <button type="button" className="newTripBtn">New Trip</button>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col s1 offset-s5 center-align">
              <h4><i className="fas fa-chevron-down"></i></h4>
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
