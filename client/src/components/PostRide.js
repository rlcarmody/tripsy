import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import API from '../utils/API';
// eslint-disable-next-line no-unused-vars
import Nav from './layoutComponents/Nav';
// eslint-disable-next-line no-unused-vars
import { ListItem } from './layoutComponents/List';
// eslint-disable-next-line no-unused-vars
import { Row, Col, Container } from './layoutComponents/Grid';


class PostRide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicleType: '',
      availableSeats: '',
      departureDate: '',
      tripID: '',
    };
  }

  componentDidMount() {
    console.log('the trip id is: ' + this.props.tripID)
    this.setState({ tripID: this.props.tripID })
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handlePostRide = (event) => {
    event.preventDefault();
    console.log(this.state.vehicleType, this.state.availableSeats, this.state.departureDate);

    API.postRide(this.state)
      .then(result => {
        console.log(result);
        // eslint-disable-next-line react/destructuring-assignment
        this.props.history.push('/rides')
      });

      console.log('form was submitted with the following data: '+ this.state);
  }

  render() {
    return (
      <Fragment>
        <Nav />
          
        <div className="container" id="postRide">
          <Row>
            <Col>
              <h2 className="headline">Post a Ride</h2>
            </Col>
          </Row>
          <form onSubmit={this.handlePostRide}>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="vehicleType">
                Vehicle Type
                <input
                  className="formFieldInput"
                  type="text"
                  name="vehicleType"
                  id="vehicleType"
                  value={this.state.vehicleType} 
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="availableSeats">
                Available Seats
                <input
                  className="formFieldInput"
                  type="number"
                  name="availableSeats"
                  id="availableSeats"
                  value={this.state.availableSeats}
                  onChange={this.handleInputChange} 
                />
              </label>
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="departureDate">
                Departure date & Time
                <input
                  className="formFieldInput"
                  type="date"
                  name="departureDate"
                  id="departureDate"
                  value={this.state.departureDate}
                  onChange={this.handleInputChange} 
                />
              </label>
            </div>

            <input
              className="btn waves-light formButton"
              type="submit"
              id="btn"
              placeholder="Next"
            />

          </form>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(PostRide);
