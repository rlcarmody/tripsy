import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../../../utils/API';
// eslint-disable-next-line no-unused-vars
import { Col, Row, Container } from '../../layoutComponents/Grid';
import { List } from '../../layoutComponents/List';
import Card from '../../layoutComponents/Card';
import Trip from './Trip';

class MyTrips extends Component {
    state = {
      trips: [],
    };

    componentDidMount() {
      this.getTrips();
      console.log('got trips');
    }

    getTrips = () => {
      API.getTrips()
        .then(res => this.setState({
          trips: res.data.trips,
        })).catch(() => this.setState({
          trips: [],
        }));
    };

    render() {
      return (

        <Fragment>
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              <h4 id="subHeadline">Your Upcoming Trips</h4>
            </div>
            <div className="col-md-3" />
          </div>
          <div className="row">
            <div id="divider" />
            <div className="col-md-2" />
            <div className="col-md-8">
              {this.state.trips.length ? (
                <List>
                  {this.state.trips.map(trip => (
                    <Trip
                      name={trip.name}
                      location={trip.location}
                      organizer={trip.organizer.displayName}
                      startDate={trip.startDate}
                      endDate={trip.endDate}
                      description={trip.description}
                      setGlobalTrip={this.props.setGlobalTrip}
                      id={trip._id}
                      // eslint-disable-next-line no-underscore-dangle
                      key={trip._id}
                    />
                  ))}
                </List>
              ) : (
                <div className="row text-center">
                  <h4 className="text-center">No Saved Trips</h4>
                </div>
              )}

            </div>
            <div className="col-md-2" />
          </div>
        </Fragment>
      );
    }
}
export default MyTrips;
