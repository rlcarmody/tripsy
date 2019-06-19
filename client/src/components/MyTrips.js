import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../utils/API';
import { Col, Row, Container } from './layoutComponents/Grid';
import { List } from './layoutComponents/List';
import Card from './layoutComponents/Card';
import Trip from './Trip';

class MyTrips extends Component {
    state = {
      trips: [],
    };

    getTrips = () => {
      API.getTrips()
        .then(res => this.setState({
          trips: res.data,
        }),
        ).catch(() => this.setState({
          trips: [],
        }),
        );
    };

    render() {
      return (

        <Fragment>
          <Link to="/tripdash">Go to tripdash</Link>

          <Row>
            <Col size="md-12">
              <Card title="My Trips">
                {this.state.trips.length ? (
                  <List>
                    {this.state.trips.map(trip => (
                      <Trip
                        name={trip.name}
                        location={trip.location}
                        organizer={trip.organizer}
                        startDate={trip.startDate}
                        endDate={trip.endDate}
                        description={trip.description}
                      />
                    ))}
                  </List>
                ) : (
                  <h2 className="text-center">No Saved Trips</h2>
                )}
              </Card>
            </Col>
          </Row>
        </Fragment>
      );
    }
}
export default MyTrips;
