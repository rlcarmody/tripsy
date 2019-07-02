import React, { Component, Fragment } from 'react';
import dateFns from 'date-fns';

class RidesTableRow extends Component {
  render() {
    const { provider, vehicleType, departureDate, availableSeats } = this.props;
    return (
      <Fragment>
        <tr>
          <td>
            <p className="align-center">{provider.displayName}</p>
          </td>
          <td>
            <p className="align-center">{vehicleType}</p>
          </td>
          <td>
            <p className="align-center">{dateFns.format(departureDate, 'MMMM DD, YYYY')}</p>
          </td>
          <td>
            <p className="align-center">{availableSeats}</p>
          </td>
          <td>
            <button onClick={() => this.props.onSeatClaimed(this.props.id)} type="button" className="button align-center">Claim Seat</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}
export default RidesTableRow;
