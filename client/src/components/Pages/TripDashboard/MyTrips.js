/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import API from '../../../utils/API';
import { List } from '../../layoutComponents/List';
import Trip from './Trip';

class MyTrips extends Component {
    state = {
      trips: [],
    };

    componentDidMount() {
      this.getTrips();
    }

    getTrips = () => {
      API.getTrips()
        .then(res => this.setState({
          trips: res.data.trips,
        })).catch(() => this.setState({
          trips: [],
        }));
    };

    render() {
      const { trips } = this.state;
      const { setGlobalTrip } = this.props;
      return (

        <Fragment>

          <div className="row">
            <div id="divider" />
            <div className="col s12 center-align">
              {trips.length ? (
                <List>
                  {trips.map(trip => (
                    <Trip
                      name={trip.name}
                      location={trip.location}
                      organizer={trip.organizer.displayName}
                      startDate={trip.startDate}
                      endDate={trip.endDate}
                      description={trip.description}
                      setGlobalTrip={setGlobalTrip}
                      id={trip._id}
                      key={trip._id}
                    />
                  ))}
                </List>
              ) : (
                <div className="row center-align">
                  <h4 className="center-align">No Saved Trips</h4>
                </div>
              )}

            </div>
          </div>
        </Fragment>
      );
    }
}
export default MyTrips;

MyTrips.propTypes = {
  setGlobalTrip: PropTypes.func.isRequired,
};
