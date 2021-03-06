import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format, addMinutes } from 'date-fns';
import { Link } from 'react-router-dom';
import { ListItem } from '../../layoutComponents/List';

const TZ_OFFSET = new Date().getTimezoneOffset();

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
          <div className="col s12">
            <h4 id="subHeadline">
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
          <div className="col s12">
            {organizer && (
              <p className="font-italic small">
                {`Organized by ${organizer}`}
              </p>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            {startDate && endDate && (
            <p>
              {`This Trip Starts on ${format(addMinutes(startDate, TZ_OFFSET), 'MMMM DD, YYYY')}`}
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
