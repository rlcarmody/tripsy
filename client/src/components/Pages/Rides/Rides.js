import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../../../utils/API';
import { List } from '../../layoutComponents/List';
import { Row, Col, Container } from '../../layoutComponents/Grid';
import Card from '../../layoutComponents/Card';
import Nav from '../../layoutComponents/Nav';
import SingleRide from './SingleRide';

class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rides: [],
    };
  }

  componentDidMount() {
    console.log('The trip ID is: ' + this.props.tripID);
    console.log(this.state.rides);
    this.getRides();
  }

  getRides = () => {
    API.getRides(this.props.tripID)
      .then(res => this.setState({
        rides: res.data,
      })).catch(() => this.setState({
        rides: [],
      }));
  };

  render() {
    return (

      <Fragment>
        <Nav />
        <div className="container">
          <div className="row text-center">
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
            <Link to="/PostRide">
              <button type="button" className="button btnNav">Post a Ride</button>
            </Link>
          </div>
  
          <div className="row">
            <div className="col-md-12 text-center" id="subHeadline">
              <h3>Rides</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                {this.state.rides.length ? (
                  <List>
                    {this.state.rides.map(trip => (
                      <SingleRide
                        vehicleType={SingleRide.vehicleType}
                        availableSeats={SingleRide.availableSeats}
                        departureDate={SingleRide.departureDate}
                        driver={SingleRide.driver}
                        // eslint-disable-next-line no-underscore-dangle
                        key={SingleRide._id}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">No Rides Posted</h2>
                )}
              </div>
            </div>
          </div>

        </div>
      </Fragment>
    );
  }
}
export default Rides;
