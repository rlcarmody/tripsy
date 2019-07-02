import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { Row } from '../layoutComponents/Grid';
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
        console.log('trip name is: ' + result.data.name)
        this.props.onNewTrip(result.data._id, result.data.name);
        this.props.history.push('/inviteGuests/fromNew');
      })
      .catch((error) => {
        return(error);
      });
  }

  render() {
    return (
      <Fragment>
        <Nav checkLoginStatus={this.props.checkLoginStatus} />
        <div className="container">
          <Row>
            <div className="col s12 center-align">
              <h2 id="subHeadline">Create a new trip!</h2>
            </div>
          </Row>
          <Row>
            <div className="col s12">
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
                  <span className="helper-text left-align">End Date</span>
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
                  value="Next"
                />

              </form>
            </div>
          </Row>

        </div>
      </Fragment>
    );
  }
}
export default withRouter(NewTrip);
