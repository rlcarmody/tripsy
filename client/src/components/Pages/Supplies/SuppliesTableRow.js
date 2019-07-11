import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class TableRow extends Component {
  render() {
    const {
      item, claimedBy, onClaimed, id,
    } = this.props;
    return (
      <Fragment>
        <tr>
          <td>
            <p>
              {item}
            </p>
          </td>
          <td>
            <p>
              {(claimedBy || {}).displayName}
            </p>

          </td>
          <td>
            {!claimedBy.displayName && <button onClick={() => onClaimed(id)} type="button" className="button align-center">Claim</button>}
          </td>
        </tr>
      </Fragment>
    );
  }
}
export default TableRow;

TableRow.propTypes = {
  item: PropTypes.string.isRequired,
  claimedBy: PropTypes.shape({
    _id: PropTypes.string,
    displayName: PropTypes.string,
  }),
  onClaimed: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

TableRow.defaultProps = {
  claimedBy: {
    displayName: '',
  },
};
