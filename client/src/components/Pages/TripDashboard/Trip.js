import React, { Component } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListItem } from '../../layoutComponents/List';

class Trip extends Component {
  render() {
    const {
      name,
      location,
      startDate,
      endDate,
      organizer,
      isInvitation,
      setGlobalTrip,
      id,
    } = this.props;

    return (
      <ListItem className="center-align">
        <div className="row flex-wrap">
          <div className="col s6 offset-s3">
            <h4>
              {name}
            </h4>
            {location && (
            <h5 className="font-italic">
                {location}
            </h5>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            {organizer && (
              <p className="font-italic small">
                {`Organized by ${organizer}`}
              </p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            {startDate && endDate && (
            <p>
              {`This Trip Starts on ${dateFns.format(startDate, 'MMMM DD, YYYY')}`}
            </p>
            )}
          </div>
        </div>
        {!isInvitation && (
        <div className="row center-align">
          <Link to="/tripDash">
            <button type="button" className="button viewTripBtn" onClick={() => { setGlobalTrip(id, name); }}>View Trip</button>
          </Link>
        </div>
        )}
        <div id="divider" />

      </ListItem>
    );
  }
}
Trip.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  isInvitation: PropTypes.bool,
  setGlobalTrip: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

Trip.defaultProps = {
  isInvitation: false,
};

export default Trip;
