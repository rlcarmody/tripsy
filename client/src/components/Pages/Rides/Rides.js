import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RidesTable from './RidesTable';
import Nav from '../../layoutComponents/Nav';
import API from '../../../utils/API';


class Rides extends Component {
  state={
    rides: [],
  }

  componentDidMount = () => {
    API.getRides(this.props.tripID)
      .then((data) => {
        this.setState({ rides: data.data });
      });
  }

  handleOnSeatClaimed = () => {
    API.getRides(this.props.tripID)
      .then((data) => {
        this.setState({ rides: data.data });
      });
  }

  render() {
    return (
      <Fragment>
        <Nav checkLoginStatus={this.props.checkLoginStatus} />

        <div className="container" id="rides">

          <div className="row center-align">
            <div className="col s12 center-align">

              <Link to="/supplies">
                <button type="button" className="button btnNav">Supplies</button>
              </Link>
              <Link to="/inviteGuests">
                <button type="button" className="button btnNav">Invite Guests</button>
              </Link>
              <Link to="/tripDash">
                <button type="button" className="button btnAction">This Trip</button>
              </Link>
              <Link to="/home">
                <button type="button" className="button btnNav">My Trips</button>
              </Link>

            </div>
          </div>

          <div className="row center-align">
            <Link to="/postRide">
              <button type="button" className="button btnAction">Post A Ride</button>
            </Link>
          </div>

          <div className="row">
            <div className="col s12 center-align" id="subHeadline">
              <h3>Rides</h3>
            </div>
          </div>

          <RidesTable onSeatClaimed={this.handleOnSeatClaimed} rides={this.state.rides} />

        </div>
      </Fragment>
    );
  }
}
export default Rides;
