/* eslint-disable no-underscore-dangle */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
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
    const { onNewTrip, history } = this.props;
    API.createTrip(this.state)
      .then((result) => {
        onNewTrip(result.data._id, result.data.name);
        history.push('/inviteGuests/fromNew');
      })
      .catch(error => error);
  }

  render() {
    const { checkLoginStatus } = this.props;
    const {
      name, location, startDate, endDate, description,
    } = this.state;
    return (
      <Fragment>
        <Nav checkLoginStatus={checkLoginStatus} />
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
                    value={name}
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
                    value={location}
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
                    value={startDate}
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
                    value={endDate}
                    onChange={this.handleInputChange}
                  />
                </div>

                <div className="formField">
                  <div className="row">
                    <div className="input-field">
                      <textarea
                        value={description}
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

NewTrip.propTypes = {
  onNewTrip: PropTypes.func.isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
