import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { format, addMinutes } from 'date-fns';
import PropTypes from 'prop-types';
import API from '../../../utils/API';
import Comment from '../../layoutComponents/Comment';
import BingMap from './Map';
import Nav from '../../layoutComponents/Nav';

const TZ_OFFSET = new Date().getTimezoneOffset();

class TripDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: '',
    };
  }

  componentDidMount() {
    this.getOneTrip();
  }

  getOneTrip = () => {
    const { tripID } = this.props;
    API.getOneTrip(tripID)
      .then((res) => {
        this.setState({
          trip: res.data,
        });
      }).catch(() => this.setState({
        trip: [],
      }));
  };

  render() {
    const { tripID, checkLoginStatus } = this.props;
    const {
      trip: {
        coordinates,
        name,
        startDate,
        endDate,
        description,
      },
    } = this.state;
    return (

      <Fragment>
        <Nav checkLoginStatus={checkLoginStatus} />
        <div className="container">
          <div className="row center-align">
            <div className="col s12 center-align">

              <Link to="/rides">
                <button type="button" className="button btnNav">Rides</button>
              </Link>
              <Link to="/supplies">
                <button type="button" className="button btnNav">Supplies</button>
              </Link>
              <Link to="/inviteGuests/fromDash">
                <button type="button" className="button btnNav">Invite Guests</button>
              </Link>
              <Link to="/home">
                <button type="button" className="button btnNav">My Trips</button>
              </Link>

            </div>
          </div>

          <div className="row center-align">
            <div className="col s12">

              <h3 id="subHeadline">
                {name}
              </h3>
              <p className="text-center">
                {format(addMinutes(startDate, TZ_OFFSET), 'MMMM DD, YYYY')}
                {' '}
-
                {' '}
                {format(addMinutes(endDate, TZ_OFFSET), 'MMMM DD, YYYY')}
              </p>

            </div>
          </div>

          <div id="dividerLite" />

          <div className="row">
            <div className="col s12 m12 l6">
              {coordinates && <BingMap coordinates={coordinates} />}
            </div>

            <div className="col s12 m12 l6">
              <div className="card">
                <h4>About This Trip</h4>
                <div className="divider" />
                <p>
                  {description}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <Comment tripID={tripID} />
          </div>

        </div>
      </Fragment>
    );
  }
}

TripDash.propTypes = {
  tripID: PropTypes.string.isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
};

export default TripDash;
