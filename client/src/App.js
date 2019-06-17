import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import TripDash from './components/TripDash';
import Rides from './components/Rides';
import Supplies from './components/Supplies';
import Guests from './components/Guests';

class App extends Component {
  render() {
    return (

      <Router>
        
        <Route exact path="/" component={Signup} />
        
        <Route path="/login" component={Login} />        

        <Route path="/home" component={Home} />

        <Route path="/tripdash" component={TripDash} />

        <Route path="/rides" component={Rides} />

        <Route path="/supplies" component={Supplies} />

        <Route path="/guests" component={Guests} />
        
        
      </Router>


    );
  }
}

export default App;
