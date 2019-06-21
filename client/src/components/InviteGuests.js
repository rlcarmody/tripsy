/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';
import { ListItem } from './layoutComponents/List';
import { Row, Col, Container } from './layoutComponents/Grid';
import API from '../utils/API';


class InviteGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuest: '',
      guests: [],
    };
  }

  addGuest = () => {
    this.setState({ guests: [...this.state.guests, this.state.newGuest], newGuest: '' });
  }

  handleChange = (e) => {
    // this.state.guests[index] = e.target.value;
    this.setState({ newGuest: e.target.value });
  }

  handleRemove = (index) => {
    this.state.guests.splice(index, 1);
    this.setState({ guests: this.state.guests });
  }

  handleInviteGuests = (event) => {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    console.log('form was submitted with the following data:');
    console.log(this.state);

    API.sendInvite(this.props.tripID, this.state.guests)
      .then(result => {
        console.log('HI');
        this.props.history.push('/home');
      });
  }

  render() {
      console.log(this.props.tripID)
    return (
      <Fragment>
        <Container>
          <Row>
            <Col>
              <h2 className="headline">Invite your friends!</h2>
            </Col>
          </Row>
          <form onSubmit={this.handleInviteGuests}>
            
            <div className="formField">
              <label className="formFieldLabel" htmlFor="email">
                Your friend's email address...
                <input
                  className="formFieldInput"
                  type="email"
                  name="email"
                  id="email"
                  value={this.state.newGuest}
                  onChange={this.handleChange}
                />
              </label>
              {this.state.guests.map((guest, index) => (
                <div key={index}>
                  {guest}
                  <button onClick={this.handleRemove}>X</button>

                </div>
              ))}
              <br />
              <button
                className="btn waves-light"
                type="button"
                onClick={this.addGuest}>
                    Add Guest
              </button>
            </div>
            <br />
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
export default withRouter(InviteGuests);
