/* global socket */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SuppliesTable from './SuppliesTable';
import Nav from '../../layoutComponents/Nav';
import API from '../../../utils/API';
import AddSuppliesForm from './AddSuppliesForm';

class Supplies extends Component {
  state={
    supplies: [],
  }

  updateSupplies = (supplyArray) => {
    this.setState(currentState => ({ supplies: [...currentState.supplies, ...supplyArray] }));
  }

  componentDidMount = () => {
    const { tripID } = this.props;
    this.getSupplies();
    socket.on(`${tripID}-Supplies`, () => {
      this.getSupplies();
    });
  }

  getSupplies = () => {
    const { tripID } = this.props;
    API.getSupplies(tripID)
      .then((data) => {
        this.setState({ supplies: data.data });
      });
  }

  handleOnClaimed = () => {
    const { tripID } = this.props;
    API.getSupplies(tripID)
      .then((data) => {
        this.setState({ supplies: data.data });
      });
  }

  render() {
    const { checkLoginStatus, tripID, tripName } = this.props;
    const { supplies } = this.state;
    return (
      <Fragment>
        <Nav checkLoginStatus={checkLoginStatus} />

        <div className="container" id="supplies">

          <div className="row center-align">
            <div className="col s12 center-align">

              <Link to="/rides">
                <button type="button" className="button btnNav">Rides</button>
              </Link>
              <Link to="/inviteGuests">
                <button type="button" className="button btnNav">Invite Guests</button>
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
            <div className="col s12 center-align" id="subHeadline">
              <h3>
                {`Supplies for ${tripName}`}
              </h3>
            </div>
          </div>
          <section>
            <h5 className="center-align">Add Items to This List:</h5>
            <AddSuppliesForm updateSupplies={this.updateSupplies} tripID={tripID} />
            <br />
          </section>

          <SuppliesTable onClaimed={this.handleOnClaimed} supplies={supplies} />

        </div>
      </Fragment>
    );
  }
}
export default Supplies;

Supplies.propTypes = {
  checkLoginStatus: PropTypes.func.isRequired,
  tripID: PropTypes.string.isRequired,
  tripName: PropTypes.string.isRequired,
};
