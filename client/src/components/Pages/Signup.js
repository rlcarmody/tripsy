/* global M */
/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import API from '../../utils/API';

const { REACT_APP_FACEBOOK_KEY } = process.env;

class Signup extends Component {
  facebookResponse = (response) => {
    const { checkLoginStatus } = this.props;
    if (!response.accessToken) {
      M.toast({ html: 'Login failed' });
    } else {
      API.loginOrCreateUser(response)
        .then(() => checkLoginStatus());
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    return !isAuthenticated ? (
      <Fragment>
        <div id="signUpLeft">
          <img id="logo" alt="logo" src="./images/tripsy.PNG" />
          <h2 className="headline" id="headline">
            <strong>
              {'Trippin\' Made Easy'}
            </strong>
          </h2>
          <div id="fbLogin">
            <FacebookLogin
              appId={REACT_APP_FACEBOOK_KEY}
              fields="name, email, picture"
              callback={this.facebookResponse}
              icon="fa-facebook"
            />
          </div>
        </div>
      </Fragment>
    )
      : <Redirect to="/home" />;
  }
}
export default Signup;

Signup.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
};
