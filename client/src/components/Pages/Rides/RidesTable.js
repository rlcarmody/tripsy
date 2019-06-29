import React, { Component, Fragment } from 'react';
import RidesTableRow from './RidesTableRow';
import API from '../../../utils/API';

class RidesTable extends Component {
  handleOnSeatClaimed = (id) => {
    console.log('onSeatClaimed');
    const { onSeatClaimed } = this.props;
    API.claimRide(id)
      .then(() => onSeatClaimed());
  }

  render() {
    return (
      <Fragment>
        {this.props.rides.length ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Driver</th>
                <th scope="col">Vehicle</th>
                <th scope="col">Departure</th>
                <th scope="col">Seats Available</th>
                <th scope="col">Claim a Seat</th>
              </tr>
            </thead>
            <tbody>
              {this.props.rides.map( ride => (
                <RidesTableRow
                  id={ride._id}
                  provider={ride.provider}
                  vehicleType={ride.vehicleType}
                  departureDate={ride.departureDate}
                  availableSeats={ride.availableSeats}
                  onSeatClaimed={this.handleOnSeatClaimed}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <h5 className="center-align">No rides have been posted yet</h5>
        )}
      </Fragment>
    );
  }
}
export default RidesTable;
