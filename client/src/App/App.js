import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from '../components/Pages/Signup';
import Home from '../components/Pages/Home';
import TripDash from '../components/Pages/TripDashboard/TripDash';
import Rides from '../components/Pages/Rides/Rides';
import Supplies from '../components/Pages/Supplies/Supplies';
import Guests from '../components/Pages/Guests/Guests';
import NewTrip from '../components/Pages/NewTrip';
import Invitation from '../components/Pages/Guests/Invitation';
import InviteGuests from '../components/Pages/Guests/InviteGuests';
import PostRide from '../components/Pages/Rides/PostRide';
import AddSupplies from '../components/Pages/Supplies/AddSupplies';
import AddSuppliesForm from '../components/Pages/Supplies/AddSuppliesForm';
import API from '../utils/API';

class App extends Component {
state= {
  tripID: undefined,
  rideID: undefined,
  isAuthenticated: false,
}

componentDidMount() {
  this.checkLoginStatus();
}

  handleNewTrip = (id) => {
    this.setState({ tripID: id });
  }

  handleNewRide = (id) => {
    this.setState({ rideID: id });
  }

  checkLoginStatus = () => {
    API.checkLoginStatus()
      .then((result) => {
        const { isAuthenticated } = result.data;
        this.setState({ isAuthenticated });
      });
  }

  render() {
    const { isAuthenticated } = this.state;
    return (
      <Router>

        { isAuthenticated && <Route path="/home" render={() => <Home setGlobalTrip={this.handleNewTrip} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/NewTrip" render={() => <NewTrip onNewTrip={this.handleNewTrip} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/inviteGuests" render={() => <InviteGuests tripID={this.state.tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/tripdash" render={() => <TripDash tripID={this.state.tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        {isAuthenticated && <Route path="/rides" render={() => <Rides tripID={this.state.tripID} rideID={this.state.rideID} checkLoginStatus={this.checkLoginStatus} />} />}

        {isAuthenticated && <Route path="/postRide" render={() => <PostRide onNewRide={this.handleNewRide} tripID={this.state.tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        {isAuthenticated && <Route path="/supplies" render={() => <Supplies tripID={this.state.tripID} />} checkLoginStatus={this.checkLoginStatus} />}

        {isAuthenticated && <Route path="/AddSupplies" render={() => <AddSupplies tripID={this.state.tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        {isAuthenticated && <Route path="/AddSuppliesForm" render={() => <AddSuppliesForm tripID={this.state.tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        {isAuthenticated && <Route path="/guests" component={Guests} checkLoginStatus={this.checkLoginStatus} />}

        <Route path="/invitation" component={Invitation} />

        <Route
          render={() => (
            <Signup
              isAuthenticated={isAuthenticated}
              checkLoginStatus={this.checkLoginStatus}
            />
          )}
        />

      </Router>


    );
  }
}

export default App;
