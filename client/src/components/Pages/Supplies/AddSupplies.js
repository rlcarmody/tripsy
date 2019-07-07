import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Nav from '../../layoutComponents/Nav';
import AddSuppliesForm from './AddSuppliesForm';

const AddSupplies = ({ checkLoginStatus, tripID }) => (
  <Fragment>
    <Nav checkLoginStatus={checkLoginStatus} />
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
      <AddSuppliesForm tripID={tripID} />
      <br />
      <p id="linkP">
        <Link id="linkP" to="/tripDash">
          Skip This Step
        </Link>
      </p>
    </div>
  </Fragment>
);

export default withRouter(AddSupplies);

AddSupplies.propTypes = {
  checkLoginStatus: PropTypes.func.isRequired,
  tripID: PropTypes.string.isRequired,
};
