import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SuppliesTable from './SuppliesTable';
import Nav from '../../layoutComponents/Nav';
import API from '../../../utils/API';
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
        console.log(data);
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
        <Nav />

        <Container id="supplies">
          <Row>
            <Link to="/AddSupplies">
              <button type="button">Create A Shopping List</button>
            </Link>
          </Row>

          <Row>
            <section>
            <Link to="/tripdash">
                <button type="button">Trip</button>
              </Link>
              <Link to="/guests">
                <button type="button">Guests</button>
              </Link>
              <Link to="/rides">
                <button type="button">Rides</button>
              </Link>
            </section>
          </Row>

          <Row className="headline">
            <section>
              <h3>Supplies</h3>
            </section>
          </Row>

          <SuppliesTable onClaimed={this.handleOnClaimed} supplies={this.state.supplies} />

        </Container>
      </Fragment>
    );
  }
}
export default Supplies;
