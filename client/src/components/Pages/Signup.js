/* eslint-disable prefer-destructuring */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component, Fragment } from 'react';
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
      <Fragment>
        <div className="row">
          <div className="col s6" id="signUpLeft">
            <img id='logo' alt="logo" src={ require('../../images/tripsy.PNG') } />
            <h2 className="headline" id="headline"><strong>Trippin' Made Easy</strong></h2>
          </div>

          <div className="col s6" id="signUpRight">
            <section>
              <h5 id="subHeadline"> Welcome to Tripsy! Create an account to get started.</h5>
            </section>
    
            <form onSubmit={this.handleSignup}>
              <div className="formField">
                <input
                  className="formFieldInput"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  value={this.state.name} 
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="formField">
                <input
                  className="formFieldInput"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email Address"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="formField">
                <input
                  className="formFieldInput"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Tripsy Password"
                  value={this.state.password}
                  onChange={this.handleInputChange} 
                />
              </div>

              <div className="formField">
                <input
                  className="formFieldInput"
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Your Password One More Time"
                  value={this.state.confirmPassword}
                  onChange={this.handleInputChange}
                />
              </div>

              <input
                className="btn waves-light formButton"
                type="submit"
                value="Sign Up!"
                id="btnSubmit"
                placeholder="Submit"
              />

              <section>
                <p id="welcomePageP">Already have an account?
                  <Link to="/login" id="signUpP"> Login</Link>
                </p>
              </section>

            </form>
          </div>
        </div>
      </Fragment>
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
