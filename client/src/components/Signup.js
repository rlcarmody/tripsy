import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state={
      email: "",
      name: "",
      password: "",  
      confirmPassword: "",
    };
  } 
  //   validateForm=event => {
  //    if (this.state.password.length < 1) {
  //      console.log('password is missing')
  //    }
  //   //  else if (this.state.password.length < 1) {
  //   //   console.log('password is missing')
  //   // }
  //   else if (this.state.confirmPassword.length < 1) {
  //     console.log('password confirmation is missing')
  //   }
  //   else if (this.state.name.length < 1) {
  //     console.log('name is missing')
  //   }
  //   else if (this.state.password !== this.state.confirmPassword) {
  //     console.log('passwords do not match')
  //   }
  //   else {
  //     console.log('validated!')
  //   }       
  // }
  

    handleSignup=event => {
      event.preventDefault();
      console.log(this.state.email, 
                  this.state.name, 
                  this.state.password, 
                  this.state.confirmPassword);
      // this.validateForm(); 
    };
    // const formStyle={
    //   position: 'absolute',
    //   width: '40vw',
    //   top:0,
    //   bottom: 0,
    //   left: 0,
    //   right: 0,
    //   margin: 'auto'
    // };
  
    // const buttonStyle={
    //   backgroundColor: 'teal', 
    //   width: 'auto'
    //  };

    render() { 
      return (
      <div className='container'>
        <form onSubmit={this.handleSignup}>
          <div className ='subHeadline'>
              <h5>Welcome to Tripsy! Create an account to get started.</h5>
          </div>
          <div className='formField'>
              <label className='formFieldLabel' htmlFor='name'>Name</label>
              <input className='formFieldInput' type='text' name='name' id='name' placeholder="What's your name?"></input>
          </div>
          <div className='formField'>
              <label className='formFieldLabel' htmlFor='email'>E-mail Address</label>
              <input className='formFieldInput' type='email' name='email' id='email' placeholder="And your email address?"></input>
          </div>
          
          <div className='formField'>
              <label className='formFieldLabel' htmlFor='password'>Password</label>
              <input className='formFieldInput' type='password' name='password' id='password' placeholder="Create a password..."></input>
          </div>
          <div className='formField'>
              <label className='formFieldLabel' htmlFor='password'>Confirm Password</label>
              <input className='formFieldInput' type='password' name='confirmPassword' id='password' placeholder="Let's get that password one more time."></input>
          </div>   
          <input className='btn waves-light formButton' type='submit'  id='btnSubmit'  placeholder='Submit'></input>   
          <section>
              {<p>Already have an account?  
                <Link to='/login'>Login</Link>
              </p>}
          </section>    
          
        </form>
      </div>
      )
    };
  }
  export default Signup;