/* global M */
import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import FacebookLogin from 'react-facebook-login';
import { Redirect, withRouter } from 'react-router-dom';
import API from '../../../utils/API';
import Trip from '../TripDashboard/Trip';
import ActionButton from '../../layoutComponents/ActionButton';
import Nav from '../../layoutComponents/Nav';
import { List } from '../../layoutComponents/List';
import './Invitation.css';

const { REACT_APP_FACEBOOK_KEY } = process.env;

class Invitation extends Component {
  state = {
    inviteID: '',
    name: '',
    location: '',
    description: '',
    startDate: '',
    endDate: '',
    organizer: '',
    tripID: '',
    accepted: false,
  }


  componentDidMount() {
    const { location: { search }, checkLoginStatus } = this.props;
    const { inviteID } = queryString.parse(search);
    this.setState({ inviteID });
    checkLoginStatus();
    API.findInvite(inviteID)
      .then((data) => {
        const {
          tripID: {
            _id,
            name,
            location,
            description,
            startDate,
            endDate,
            organizer: {
              displayName: organizer,
            },
          },
        } = data.data;
        this.setState({
          name, location, description, startDate, endDate, organizer, tripID: _id,
        });
      })
      .catch(err => console.log(err));
  }

  handleAccept = (event) => {
    event.preventDefault();
    const { checkLoginStatus } = this.props;
    const { tripID } = this.state;
    API.acceptInvite(tripID)
      .then(() => {
        checkLoginStatus();
        this.setState({ accepted: true });
      });
  };

  facebookResponse = (response) => {
    if (!response.accessToken) {
      M.toast({ html: 'Login failed' });
    } else {
      API.loginOrCreateUser(response)
        .then(() => this.props.checkLoginStatus());
    }
  }

  render() {
    const { isAuthenticated } = this.props;
    const { accepted } = this.state;
    return accepted
      ? <Redirect to="/home" />
      : (
        <Fragment>
          {isAuthenticated && <Nav checkLoginStatus={this.props.checkLoginStatus} />}
          {!isAuthenticated
            && <h4>You were invited on this trip. Please log in to accept</h4>}
          <div style={{ margin: '2em' }} className="center-align">
            {isAuthenticated
              && <ActionButton buttonText="Accept Invitation" buttonFunction={this.handleAccept} />}
            {!isAuthenticated
              && (
              <FacebookLogin
                appId={REACT_APP_FACEBOOK_KEY}
                fields="name, email, picture"
                callback={this.facebookResponse}
                icon="fa-facebook"
              />
              )}
          </div>
          <List>
            <Trip {...this.state} isInvitation />
          </List>
        </Fragment>
      );
  }
}

Invitation.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

Invitation.defaultProps = {
  isAuthenticated: false,
};

export default withRouter(Invitation);
