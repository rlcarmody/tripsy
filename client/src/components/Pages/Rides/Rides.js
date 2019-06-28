import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import RidesTable from './RidesTable';
import Nav from '../../layoutComponents/Nav';
import API from '../../../utils/API';
import { isThisSecond } from 'date-fns';
import { Row, Col, Container } from '../../layoutComponents/Grid';


class Rides extends Component {
  state={
    rides: [],
  }

  componentDidMount = () => {
    console.log(this.props.tripID);
    API.getRides(this.props.tripID)
      .then((data) => {
        console.log(data);
        this.setState({ rides: data.data });
        console.log('component did mount! and API get was successful!');
      });
  }

  handleOnSeatClaimed = () => {
    console.log('seat claimed!');
    API.getRides(this.props.tripID)
      .then((data) => {
        this.setState({ rides: data });
      });
  }

  render() {
    return (
      <Fragment>
        <Nav />

        <div className="container" id="rides">

          <div className="row align-center">
            <div className="col-md-4" />
            <div className="col-md-4 text-center">

              <Link to="/supplies">
                <button type="button" className="button btnNav">Supplies</button>
              </Link>
              <Link to="/tripDash">
                <button type="button" className="button btnNav">This Trip</button>
              </Link>
              <Link to="/home">
                <button type="button" className="button btnNav">My Trips</button>
              </Link>

            </div>
            <div className="col-md-4" />
          </div>

          <div className="row text-center">
            <Link to="/postRide">
              <button type="button" className="button btnNav">Post A Ride</button>
            </Link>
          </div>

          <div className="row">
            <div className="col-md-12 text-center" id="subHeadline">
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
