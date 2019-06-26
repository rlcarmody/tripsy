import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../utils/API';
import Nav from './layoutComponents/Nav';
// eslint-disable-next-line no-unused-vars
import PostRide from './PostRide';

class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rides: [],
    };
  }

  componentDidMount() {
    console.log('The trip ID is: ' + this.props.tripID)
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
        <div className="container" id="rides">
          <div className="row">
            <Link to="/postRide">
              <button type="button">Post a Ride</button>
            </Link>
          </div>
          <div className="row">
            <section>
              <Link to="/trip">
                <button type="button">Trip</button>
              </Link>
              <Link to="/supplies">
                <button type="button">Supplies</button>
              </Link>
              <Link to="/guests">
                <button type="button">Guests</button>
              </Link>
            </section>
          </div>
          <div className="headline row">
            <section>
              <h3>Rides</h3>
            </section>
          </div>

        </div>
      </Fragment>
    );
  }
}
export default Rides;
