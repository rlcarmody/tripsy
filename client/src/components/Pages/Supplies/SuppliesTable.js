import React, { Component, Fragment } from 'react';
import SuppliesTableRow from './SuppliesTableRow';
import API from '../../../utils/API';

class SuppliesTable extends Component {
  handleOnClaimed = (id) => {
    console.log('onClaimed');
    const { onClaimed } = this.props;
    API.claimSupplies(id)
      .then(() => onClaimed());
  }

  render() {
    return (
      <Fragment>
        {this.props.supplies.length ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Claimed By</th>
                <th scope="col">Claim it!</th>
              </tr>
            </thead>
            <tbody>
              {this.props.supplies.map( supply => (
                <SuppliesTableRow
                  key={supply._id}
                  id={supply._id}
                  item={supply.name}
                  claim={supply.claim}
                  claimedBy={supply.claimedBy}
                  onClaimed={this.handleOnClaimed}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <h5 className="text-center">No supplies have been added yet.</h5>
        )}
      </Fragment>
    );
  }
}
export default SuppliesTable;
