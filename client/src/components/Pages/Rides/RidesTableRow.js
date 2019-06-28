import React, { Component, Fragment } from 'react';

class RidesTableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { provider, vehicleType, departureDate, availableSeats, riders } = this.props;
    return (
      <Fragment>
        <tr>
          <td>
            <p>{provider}</p>
          </td>
          <td>
            <p>{vehicleType}</p>
          </td>
          <td>
            <p>{departureDate}</p>
          </td>
          <td>
            <p>{availableSeats}</p>
          </td>
          <td>
            <p>{riders}</p>
          </td>
          <td>
            <button onClick={() => this.props.onSeatClaimed(this.props.id)} type="button" className="button">Claim Seat</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}
export default RidesTableRow;
