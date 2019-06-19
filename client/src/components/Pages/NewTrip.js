/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListItem } from '../layoutComponents/List';
import { Row, Col, Container } from '../layoutComponents/Grid';
import API from '../../utils/API';


class NewTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      startDate: '',
      endDate: '',
      organizer: '',
      description: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCreateTrip = this.handleCreateTrip.bind(this);
  }


  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleCreateTrip(event) {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    console.log('form was submitted with the following data:');
    console.log(this.state);
    API.createTrip();
  }

  render() {
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <h2 className="headline">Create a New Trip</h2>
            </Col>
          </Row>
          <form onSubmit={this.handleCreateTrip}>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="name">
                Trip Name
                <input
                  className="formFieldInput"
                  type="text"
                  name="name"
                  id="name"
                  value={this.state.name} 
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="location">
                Destination
                <input
                  className="formFieldInput"
                  type="text"
                  name="location"
                  id="location"
                  value={this.state.location}
                  onChange={this.handleInputChange} 
                />
              </label>
            </div>

            <div className="formField">
              <label className="formFieldLabel" htmlFor="startDate">
                Start Date
                <input
                  className="formFieldInput"
                  type="date"
                  name="startDate"
                  id="startDate"
                  value={this.state.startDate}
                  onChange={this.handleInputChange} 
                />
              </label>
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="endDate">
                End Date
                <input
                  className="formFieldInput"
                  type="date"
                  name="endDate"
                  id="endDate"
                  value={this.state.endDate}
                  onChange={this.handleInputChange}
                />
              </label>
            </div>
            <div className="formField">
              <label className="formFieldLabel" htmlFor="description">
                Trip Description
                <input
                  className="formFieldInput"
                  type="text"
                  name="description"
                  id="description"
                  value={this.state.description}
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
        </Container>
      </Fragment>
    );
  }
}
export default NewTrip;
