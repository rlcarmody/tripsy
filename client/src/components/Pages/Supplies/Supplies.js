import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SuppliesTable from './SuppliesTable';
import Nav from '../../layoutComponents/Nav';
import API from '../../../utils/API';
import AddSuppliesForm from './AddSuppliesForm';
import { isThisSecond } from 'date-fns';
import { Row, Col, Container } from '../../layoutComponents/Grid';


class Supplies extends Component {
  state={
    supplies: [],
  }

  componentDidMount = () => {
    console.log(this.props.tripID);
    API.getSupplies(this.props.tripID)
      .then((data) => {
        console.log('meredith', data);
        this.setState({ supplies: data.data });
        console.log('component did mount! and API get was successful!');
      });
  }

  handleOnClaimed = () => {
    console.log('item claimed!');
    API.getSupplies(this.props.tripID)
      .then((data) => {
        this.setState({ supplies: data.data });
      });
  }

  render() {
    return (
      <Fragment>
        <Nav checkLoginStatus={this.props.checkLoginStatus} />

        <div className="container" id="supplies">

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
            <div className="col s12 center-align" id="subHeadline">
              <h3>Supplies</h3>
            </div>
          </div>
          <section>
            <h5 className="center-align">Add Items to This List:</h5>
            <AddSuppliesForm tripID={this.props.tripID} />
            <br />
          </section>

          <SuppliesTable onClaimed={this.handleOnClaimed} supplies={this.state.supplies} />

        </div>
      </Fragment>
    );
  }
}
export default Supplies;
