import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container } from '../layoutComponents/Grid';
import Nav from '../layoutComponents/Nav';
import MyTrips from './TripDashboard/MyTrips';


class Home extends Component {
  render() {
    const { checkLoginStatus, setGlobalTrip } = this.props;
    return (
      <Fragment>
        <Nav checkLoginStatus={checkLoginStatus} />
        <Container id="home">
          <div className="homeScreen">
            <div className="row center-align">
              <div className="col s12">
                <img id="logo" alt="logo" src="./images/tripsy.PNG" />
              </div>
            </div>
            <div className="row">
              <div className="col s12 center-align">
                <h2 className="headline" id="headline">
                  <strong>
                    {'Trippin\' Made Easy'}
                  </strong>
                </h2>
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
                <h5>
                  <i className="fas fa-chevron-down" />
                </h5>
                <h5 id="subHeadline">Your Upcoming Trips</h5>
              </div>
            </div>
          </div>

          <div className="row myTripsDiv">
            <MyTrips setGlobalTrip={setGlobalTrip} />
          </div>

        </Container>
      </Fragment>
    );
  }
}
export default Home;

Home.propTypes = {
  checkLoginStatus: PropTypes.func.isRequired,
  setGlobalTrip: PropTypes.func.isRequired,
};
