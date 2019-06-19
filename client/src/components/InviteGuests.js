/* eslint-disable react/destructuring-assignment */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { ListItem } from './layoutComponents/List';
import { Row, Col, Container } from './layoutComponents/Grid';
import API from '../utils/API';


class InviteGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      guests: [],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInviteGuests = this.handleInviteGuests.bind(this);
  }


  handleInputChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleInviteGuests(event) {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    console.log('form was submitted with the following data:');
    console.log(this.state);
    
    API.sendInvite(this.state)
      .then(result => {
        console.log(result);
        this.props.history.push('/home');
      });
  }

  render() {
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
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </label>
              <button>Add Guest</button>
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
export default InviteGuests;
