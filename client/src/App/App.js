import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from '../components/Pages/Signup';
import Home from '../components/Pages/Home';
import TripDash from '../components/Pages/TripDashboard/TripDash';
import Rides from '../components/Pages/Rides/Rides';
import Supplies from '../components/Pages/Supplies/Supplies';
import NewTrip from '../components/Pages/NewTrip';
import Invitation from '../components/Pages/Guests/Invitation';
import InviteGuests from '../components/Pages/Guests/InviteGuests';
import PostRide from '../components/Pages/Rides/PostRide';
import AddSupplies from '../components/Pages/Supplies/AddSupplies';
import AddSuppliesForm from '../components/Pages/Supplies/AddSuppliesForm';
import API from '../utils/API';
import RidesTable from '../components/Pages/Rides/RidesTable';
import RidesTableRow from '../components/Pages/Rides/RidesTableRow';

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
  // this.setState({ tripName: tripName });
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
  const { isAuthenticated, tripID, rideID } = this.state;
  return (
    <Router>
      <Switch>
        { isAuthenticated && <Route path="/home" render={() => <Home setGlobalTrip={this.handleNewTrip} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/NewTrip" render={() => <NewTrip onNewTrip={this.handleNewTrip} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/inviteGuests/:var" render={() => <InviteGuests tripID={tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/inviteGuests" render={() => <InviteGuests tripID={tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/tripdash" render={() => <TripDash tripID={tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/rides" render={() => <Rides tripID={tripID} rideID={rideID} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/postRide" render={() => <PostRide onNewRide={this.handleNewRide} tripID={tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/ridesTableRow" render={() => <RidesTableRow tripID={tripID} rideID={rideID} />} />}

        { isAuthenticated && <Route path="/ridesTable" render={() => <RidesTable tripID={tripID} rideID={rideID} />} />}

        { isAuthenticated && <Route path="/supplies" render={() => <Supplies tripID={tripID} />} checkLoginStatus={this.checkLoginStatus} />}

        { isAuthenticated && <Route path="/AddSupplies" render={() => <AddSupplies tripID={tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        { isAuthenticated && <Route path="/AddSuppliesForm" render={() => <AddSuppliesForm tripID={tripID} checkLoginStatus={this.checkLoginStatus} />} />}

        <Route path="/invitation" render={() => <Invitation checkLoginStatus={this.checkLoginStatus} isAuthenticated={isAuthenticated} />} />

        <Route render={() => (
          <Signup isAuthenticated={isAuthenticated} checkLoginStatus={this.checkLoginStatus} />
        )}
        />

      </Switch>
    </Router>
  );
}
}

export default App;
