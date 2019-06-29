import React, { Component, Fragment } from 'react';

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, claimedBy } = this.props;
    console.log('suppliestablerow item', item);
    return (
      <Fragment>
        <tr>
          <td>
            <p>{item}</p>
          </td>
          <td>
            <p>{(claimedBy || {}).displayName}</p>

          </td>
          <td>
            <button onClick={() => this.props.onClaimed(this.props.id)} type="button" className="button">Claim</button>
          </td>
        </tr>
      </Fragment>
    );
  }
}
export default TableRow;
