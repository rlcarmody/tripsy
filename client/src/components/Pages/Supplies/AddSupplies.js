import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import Nav from '../../layoutComponents/Nav';
import AddSuppliesForm from './AddSuppliesForm';

class AddSupplies extends Component {

  render() {
    return (
      <Fragment>
        <Nav checkLoginStatus={this.props.checkLoginStatus} />
        <div className="container">
          <div className="row center-align">
            <div className="col s12 center-align">

              <Link to="/rides">
                <button type="button" className="button btnNav">Rides</button>
              </Link>
              <Link to="/tripDash">
                <button type="button" className="button btnAction">This Trip</button>
              </Link>
              <Link to="/home">
                <button type="button" className="button btnNav">My Trips</button>
              </Link>

            </div>
          </div>
          <div className="row">
            <div className="col s12 center-align">
              <h4 id="subHeadline">Create a Shopping List for your Trip!</h4>
            </div>
          </div>
          <AddSuppliesForm tripID={this.props.tripID} />
          <br />
          <p id="linkP">
          <Link id="linkP" to="/tripDash">
              Skip This Step
          </Link>
          </p>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(AddSupplies);
