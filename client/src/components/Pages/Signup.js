/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../../utils/API';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: '',
      confirmPassword: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
  }

  handleSignup(event) {
    event.preventDefault();
    const { redirectURL, callback } = this.props;
    const { name, email } = this.state;
    // eslint-disable-next-line react/destructuring-assignment
    console.log('form was submitted with the following data:');
    console.log(this.state);

    API.createNewUser({ displayName: name, email })
      .then((result) => {
        console.log(result);
        this.props.history.push(redirectURL);
        if (callback) {
          callback();
        }
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="subHeadline">
          <h5>Welcome to Tripsy! Create an account to get started.</h5>
        </div>

        <form onSubmit={this.handleSignup}>
          <div className="formField">
            <label className="formFieldLabel" htmlFor="name">
              Name
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
            <label className="formFieldLabel" htmlFor="email">
              E-mail Address
              <input
                className="formFieldInput"
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Password
              <input
                className="formFieldInput"
                type="password"
                name="password"
                id="password"
                value={this.state.password}
                onChange={this.handleInputChange} 
              />
            </label>
          </div>

          <div className="formField">
            <label className="formFieldLabel" htmlFor="password">
              Confirm Password
              <input
                className="formFieldInput"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
              />
            </label>
          </div>

          <input
            className="btn waves-light formButton"
            type="submit"
            id="btnSubmit"
            placeholder="Submit"
          />

          <section>
            <p>Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </section>

        </form>
      </div>
    );
  }
}
export default Signup;

Signup.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
  redirectURL: PropTypes.string,
  callback: PropTypes.func,
};

Signup.defaultProps = {
  redirectURL: '/home',
  callback: null,
};
