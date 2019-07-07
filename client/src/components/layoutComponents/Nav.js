import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'react-materialize';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import API from '../../utils/API';

export default class Nav extends Component {
  state = {
    displayName: null,
    pictureURL: null,
  }

  componentDidMount() {
    API.getUserDetails()
      .then((data) => {
        this.setState({ ...data.data });
      });
  }

  handleClick = () => {
    const { checkLoginStatus } = this.props;
    API.logoutUser()
      .then(() => checkLoginStatus());
  }

  render() {
    const { displayName, pictureURL } = this.state;
    const trigger = (
      <ul className="right">
        <li>
          {displayName}
        </li>
        <li>
          <img className="circlePic" alt="test" src={pictureURL} />
        </li>
      </ul>
    );
    return (
      <Fragment>
        <nav>
          <div className="nav-wrapper">
            <Link to="/home" className="brand-logo left">
              <img alt="logo" src="/images/tripsy_noText.png" width="60" height="40" />
            </Link>
            <Dropdown trigger={trigger} options={{ coverTrigger: false, autoTrigger: true }}>
              <a href="/logout" onClick={this.handleClick}>
                SIGN OUT
              </a>
            </Dropdown>
          </div>
        </nav>
      </Fragment>
    );
  }
}

Nav.propTypes = {
  checkLoginStatus: PropTypes.func.isRequired,
};
