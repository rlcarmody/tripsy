import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Pages/Signup';
import Login from './components/Pages/Login';
import Home from './components/Pages/Home';
import TripDash from './components/Pages/TripDash';
import Rides from './components/Rides';
import Supplies from './components/Supplies';
import Guests from './components/Guests';
import NewTrip from './components/Pages/NewTrip';
import Invitation from './components/Pages/Invitation';

class App extends Component {
  render() {
    return (

      <Router>

        <Route exact path="/" component={Signup} />

        <Route path="/login" component={Login} />

        <Route path="/home" component={Home} />

        <Route path="/NewTrip" component={NewTrip} />

        <Route path="/tripdash" component={TripDash} />

        <Route path="/rides" component={Rides} />

        <Route path="/supplies" component={Supplies} />

        <Route path="/guests" component={Guests} />

        <Route path="/invitation" component={Invitation} />

      </Router>


    );
  }
}

export default App;
