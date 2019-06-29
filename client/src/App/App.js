import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from '../components/Pages/Signup';
import Login from '../components/Pages/Login';
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
import RidesTable from '../components/Pages/Rides/RidesTable';
import RidesTableRow from '../components/Pages/Rides/RidesTableRow';

class App extends Component {
state= {
  tripID: undefined,
  rideID: undefined,
}

  handleNewTrip = (id) => {
    this.setState({ tripID: id });
  }

  handleNewRide = (id) => {
    this.setState({ rideID: id });
  }

  render() {
    return (

      <Router>

        <Route exact path="/" component={Signup} />

        <Route path="/login" component={Login} />

        <Route path="/home" render={() => <Home setGlobalTrip={this.handleNewTrip} />} />

        <Route path="/NewTrip" render={() => <NewTrip onNewTrip={this.handleNewTrip} />} />

        <Route path="/inviteGuests" render={() => <InviteGuests tripID={this.state.tripID} />} />

        <Route path="/tripdash" render={() => <TripDash tripID={this.state.tripID} />} />

        <Route path="/rides" render={() => <Rides tripID={this.state.tripID} rideID={this.state.rideID} />} />

        <Route path="/ridesTableRow" render={() => <RidesTableRow tripID={this.state.tripID} rideID={this.state.rideID} />} />

        <Route path="/ridesTable" render={() => <RidesTable tripID={this.state.tripID} rideID={this.state.rideID} />} />

        <Route path="/postRide" render={() => <PostRide onNewRide={this.handleNewRide} tripID={this.state.tripID} />} />

        <Route path="/supplies" render={() => <Supplies tripID={this.state.tripID} />} />

        <Route path="/AddSupplies" render={() => <AddSupplies tripID={this.state.tripID} />} />

        <Route path="/AddSuppliesForm" render={() => <AddSuppliesForm tripID={this.state.tripID} />} />

        <Route path="/invitation" component={Invitation} />

      </Router>


    );
  }
}

export default App;
