import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


class App extends Component {
  render() {
    return (


      <Router>
        
        <Route exact path="/" component={Signup} />
        

        <Route path="/login" component={Login} />
        

        <Route path="/home" component={Home} />
        
      </Router>


    );
  }
}

export default App;
