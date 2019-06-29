/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line object-curly-newline
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Row, Col, Container } from '../layoutComponents/Grid';
import API from '../../utils/API';
import Nav from '../layoutComponents/Nav';


class NewTrip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      startDate: '',
      endDate: '',
      description: '',
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleCreateTrip = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    console.log('form was submitted with the following data:');
    console.log(this.state);

    API.createTrip(this.state)
      .then((result) => {
        console.log('trip id is: ' + result.data._id)
        this.props.onNewTrip(result.data._id);
        this.props.history.push('/inviteGuests');
      })
      .catch((error) => {
        return(error);
      });
  }

  render() {
    return (
      <Fragment>
        <Nav checkLoginStatus={this.props.checkLoginStatus} />
        <div className="container" id="login">
          <Row>
          <div className="col s12 center-align">
              <h2 id="subHeadline">Create a new trip!</h2>
            </div>
          </Row>
          <form onSubmit={this.handleCreateTrip} id="newtrip">
            <div className="formField">
              <input
                className="formFieldInput"
                type="text"
                name="name"
                id="name"
                value={this.state.name}
                onChange={this.handleInputChange}
                placeholder="Trip Name"
              />
            </div>

            <div className="formField">
              <input
                className="formFieldInput"
                type="text"
                name="location"
                id="location"
                value={this.state.location}
                onChange={this.handleInputChange}
                placeholder="Destination"
              />
            </div>

            <div className="formField">
              <span className="helper-text">Start Date</span>
              <input
                className="formFieldInput"
                type="date"
                name="startDate"
                id="startDate"
                value={this.state.startDate}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="formField">
              <span className="helper-text">End Date</span>
              <input
                className="formFieldInput"
                type="date"
                name="endDate"
                id="endDate"
                value={this.state.endDate}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="formField">
              <div className="row">
                <div className="input-field">
                  <textarea
                    value={this.state.description}
                    onChange={this.handleInputChange}
                    className="materialize-textarea"
                    placeholder="Trip Description"
                    name="description"
                  />
                </div>
              </div>
            </div>

            <input
              className="btn waves-light formButton"
              type="submit"
              id="btnSubmit"
              placeholder="Next"
            />

          </form>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(NewTrip);
