import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';

class RidesTableRow extends Component {
  render() {
    const {
      provider, vehicleType, departureDate, availableSeats, onSeatClaimed, id,
    } = this.props;
    return (
      <Fragment>
        <tr>
          <td>
            <p className="align-center">
              {provider.displayName}
            </p>
          </td>
          <td>
            <p className="align-center">
              {vehicleType}
            </p>
          </td>
          <td>
            <p className="align-center">
              {dateFns.format(departureDate, 'MMMM DD, YYYY')}
            </p>
          </td>
          <td>
            <p className="align-center">
              {availableSeats}
            </p>
          </td>
          <td>
            <button onClick={() => onSeatClaimed(id)} type="button" className="button align-center">Claim Seat</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}
export default RidesTableRow;

RidesTableRow.propTypes = {
  provider: PropTypes.string.isRequired,
  vehicleType: PropTypes.string.isRequired,
  departureDate: PropTypes.string.isRequired,
  availableSeats: PropTypes.number.isRequired,
  onSeatClaimed: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
