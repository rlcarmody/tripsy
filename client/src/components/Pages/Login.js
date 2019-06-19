/* eslint-disable prefer-destructuring */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Link } from 'react-router-dom';
import API from '../../utils/API';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    // eslint-disable-next-line react/destructuring-assignment
    console.log('login was submitted with the following data:');
    console.log(this.state);
    
    API.loginUser({displayName: this.state.name, email: this.state.email})
      .then(result => {
        console.log(result);
        this.props.history.push('/home');
      });
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value,
    });
  }


  render() {
    return (
      <div className="container">
        <div className="subHeadline">
          <h5>Welcome to Tripsy! Log in to get started.</h5>
        </div>

        <form onSubmit={this.handleLogin}>

          <div className="formField">
            <input
              className="formFieldInput"
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>

          <div className="formField">
            <input
              className="formFieldInput"
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>

          <input
            className="btn waves-light formButton"
            type="submit"
            id="btnSubmit"
            placeholder="Log in"
          />

          <section>
            <p>
              Don’t have an account?
              <Link to="/">Sign up</Link>
              <br />
              <Link to="/home">Enter</Link>
            </p>
          </section>

        </form>
      </div>
    );
  }
}

export default Login;
