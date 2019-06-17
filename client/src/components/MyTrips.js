import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class MyTrips extends Component {
  render() {
    return (
      <Link to="/tripdash">My Trips Will Render Here :)</Link>
    );
  }
}
export default MyTrips;
