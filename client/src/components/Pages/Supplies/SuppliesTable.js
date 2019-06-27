import React, { Component, Fragment } from 'react';
import TableRow from './TableRow';
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
                <th scope="col">Claim</th>
              </tr>
            </thead>
            <tbody>
              {this.props.supplies.map( supply => (
                <TableRow
                  id={supply._id}
                  item={supply.item}
                  claim={supply.claim}
                  claimedBy={supply.claimedBy}
                  onClaimed={this.handleOnClaimed}
                />
              ))}
            </tbody>
          </table>
        ) : (
          <h2>No Supplies Yet</h2>
        )}
      </Fragment>
    );
  }
}
export default SuppliesTable;
