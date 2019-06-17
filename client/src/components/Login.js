import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';


class Login extends Component {

    constructor(props) {
        super(props);
    
        this.state={
          email: "",
          name: "",
          password: "",  
          confirmPassword: "",
        };
      }
      
      handleLogin=event => {
        event.preventDefault();
        console.log('You logged in!');
      };
  

    render () {
        return (
          <div className='container'>
            <form >
    
                <div className ='subHeadline'>
                    <h5>Welcome to Tripsy! Log in to get started.</h5>
                </div>
    
                <div className='formField'>
                    <input className='formFieldInput' type='email' name='email' id='email' placeholder="E-mail Address"></input>
                </div>
    
                <div className='formField'>
                    <input className='formFieldInput' type='password' name='password' id='password' placeholder="Password"></input>
                </div>
    
                <Link to='/home'><button className='btn waves-light formButton' type='submit'>Log in</button></Link>
                
                <section>
                    {<p>Don't have an account?  
                        <Link to='/'>Sign up</Link>
                    </p>}
                </section>    
    
            </form>
          </div>
        )    
    }
}

export default Login;
