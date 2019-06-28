/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Col, Row, Container } from '../../layoutComponents/Grid';
import API from '../../../utils/API';
import Comments from './Comments';
import BingMap from './Map';
import dateFns from 'date-fns';

import Nav from '../../layoutComponents/Nav';

class TripDash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trip: '',
    };
  }

  componentDidMount() {
    console.log('The trip ID is: ' + this.props.tripID)
    this.getOneTrip();
  }

  getOneTrip = () => {
    API.getOneTrip(this.props.tripID)
      .then(res => this.setState({
        trip: res.data,
      })).catch(() => this.setState({
        trip: [],
      }));
  };

  render() {
    return (

      <Fragment>
        <Nav />
        <div className="container">
          <div className="row center-align">
            <div className="col s4 offset-s4 center-align">

              <Link to="/rides">
                <button type="button" className="button btnNav">Rides</button>
              </Link>
              <Link to="/supplies">
                <button type="button" className="button btnNav">Supplies</button>
              </Link>
              <Link to="/home">
                <button type="button" className="button btnNav">My Trips</button>
              </Link>

            </div>
          </div>

          <div className="row center-align">
            <div className="col s12">
              
                <h3 id="subHeadline">{this.state.trip.name}</h3>
                <p className="center-align">{dateFns.format(this.state.trip.startDate, 'MMMM DD, YYYY')} - {dateFns.format(this.state.trip.endDate, 'MMMM DD, YYYY')}</p>
              
            </div>
          </div>

          <div id="divider" />

          <div className="row">
            <div className="col s6">
              MAP
            </div>
          
            <div className="col s6">
              <div className="card">
                  <h4>About This Trip</h4>
                  <div className="divider" />
                  <p>
                    {this.state.trip.description}
                  </p>
              </div>
            </div>
          </div>

          <div className="row">
            <section>
              <h4>Comments</h4>
            </section>
          </div>

        </div>
      </Fragment>


    );
  }
}
export default TripDash;
