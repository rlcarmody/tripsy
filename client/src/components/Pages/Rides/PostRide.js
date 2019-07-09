/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line no-unused-vars
import { Link, withRouter } from 'react-router-dom';
import API from '../../../utils/API';
import Nav from '../../layoutComponents/Nav';

class PostRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleType: '',
      availableSeats: '',
      departureDate: '',
      tripID: '',
    };
  }

  componentDidMount() {
    const { tripID, tripName } = this.props;
    this.setState({ tripID });
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handlePostRide = (event) => {
    event.preventDefault();
    const { onNewRide } = this.props;
    API.postRide(this.state)
      .then((result) => {
        onNewRide(result.data._id);
        this.props.history.push('/rides');
      });
  }

  render() {
    const { checkLoginStatus } = this.props;
    const { vehicleType, availableSeats, departureDate } = this.state;
    return (
      <Fragment>
        <Nav checkLoginStatus={checkLoginStatus} />

        <div className="container">
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
          <div className="row">
            <div className="col s12 center-align">
              <h2 id="subHeadline">Post a Ride to {this.props.tripName}</h2>
            </div>
          </div>
          <form id="postride" onSubmit={this.handlePostRide}>
            <div className="formField">
              <input
                className="formFieldInput"
                type="text"
                name="vehicleType"
                id="vehicleType"
                value={vehicleType}
                onChange={this.handleInputChange}
                placeholder="Vehicle Type"
              />
            </div>
            <div className="formField">
              <input
                className="formFieldInput"
                type="number"
                name="availableSeats"
                id="availableSeats"
                value={availableSeats}
                onChange={this.handleInputChange}
                placeholder="Available Seats"
              />
            </div>

            <div className="formField">
              <span className="helper-text">Departure Date</span>
              <input
                className="formFieldInput"
                type="date"
                name="departureDate"
                id="departureDate"
                value={departureDate}
                onChange={this.handleInputChange}
              />
            </div>

            <input
              className="btn waves-light formButton"
              type="submit"
              id="btn"
              placeholder="Next"
            />

          </form>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(PostRide);

PostRide.propTypes = {
  tripID: PropTypes.string.isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
  onNewRide: PropTypes.func.isRequired,
};
