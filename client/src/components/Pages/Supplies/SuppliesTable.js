/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import SuppliesTableRow from './SuppliesTableRow';
import API from '../../../utils/API';

class SuppliesTable extends Component {
  handleOnClaimed = (id) => {
    const { onClaimed } = this.props;
    API.claimSupplies(id)
      .then(() => onClaimed());
  }

  render() {
    const { supplies } = this.props;
    return (
      <Fragment>
        {supplies.length ? (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item</th>
                <th scope="col">Claimed By</th>
                <th scope="col">Claim it!</th>
              </tr>
            </thead>
            <tbody>
              {supplies.map(supply => (
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
          <h5 className="center-align">No supplies have been added yet.</h5>
        )}
      </Fragment>
    );
  }
}
export default SuppliesTable;

SuppliesTable.propTypes = {
  onClaimed: PropTypes.func.isRequired,
  supplies: PropTypes.arrayOf(PropTypes.any).isRequired,
};
