import React, { Component, Fragment } from 'react';

class TableRow extends Component {
  constructor(props) {
    super(props);
  }

render() {
  return (
    <Fragment>
      <tr>
        <td>
          {item}
        </td>
        <td>
          {claimedBy}
        </td>
        <td>
          <button onClick={() => this.props.onClaimed(this.props.id)} type="button">Claim</button>
        </td>
      </tr>
    </Fragment>
  );
}
}
export default TableRow;
