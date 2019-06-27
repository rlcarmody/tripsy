import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../../../utils/API';
import { List } from '../../layoutComponents/List';
import { Row, Col, Container } from '../../layoutComponents/Grid';
import Card from '../../layoutComponents/Card';
import Nav from '../../layoutComponents/Nav';
import SingleRide from './SingleRide';

class Rides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rides: [],
    };
  }

  componentDidMount() {
    console.log('The trip ID is: ' + this.props.tripID);
    console.log(this.state.rides);
    this.getRides();
  }

  getRides = () => {
    API.getRides(this.props.tripID)
      .then(res => this.setState({
        rides: res.data,
      })).catch(() => this.setState({
        rides: [],
      }));
  };

  render() {
    return (

      <Fragment>
        <Nav />
        <Container id="rides">
          <Row>
            <Link to="/postRide">
              <button type="button">Post a Ride</button>
            </Link>
          </Row>
          <Row>
            <section>
              <Link to="/tripDash">
                <button type="button">Trip</button>
              </Link>
              <Link to="/supplies">
                <button type="button">Supplies</button>
              </Link>
              <Link to="/guests">
                <button type="button">Guests</button>
              </Link>
            </section>
          </Row>
          <Row>
            <Col size="md-12">
              <Card title="Rides">
                {this.state.rides.length ? (
                  <List>
                    {this.state.rides.map(trip => (
                      <SingleRide
                        vehicleType={SingleRide.vehicleType}
                        availableSeats={SingleRide.availableSeats}
                        departureDate={SingleRide.departureDate}
                        driver={SingleRide.driver}
                        // eslint-disable-next-line no-underscore-dangle
                        key={SingleRide._id}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">No Rides Posted</h2>
                )}
              </Card>
            </Col>
          </Row>

        </Container>
      </Fragment>
    );
  }
}
export default Rides;
