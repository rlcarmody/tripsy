import React from 'react';
import FacebookLoginWithButton from 'react-facebook-login';

const componentClicked = () => {
  console.log('Clicked!')
}

const LoginButton = ({facebookResponse }) => (
  <FacebookLoginWithButton
    appId="2333667796914821"
    // autoLoad
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse}
    icon="fa-facebook"/>
)


const UserScreen = ({user}) => (
  <>
    <h1>Welcome {user.name}!</h1>
    <p>{ user.email }</p>
    <img src={user.picture.data.url} height={user.picture.height} width={user.picture.width} alt="avatar"/>
  </>
)

class App extends React.Component {
  state = {user:false}
  facebookResponse = (response) => { console.log( response ); this.setState( {...this.state, user: response } ) }

  render() {
    return (
      <div style={{ margin: "auto", textAlign: "center", paddingTop: "2em" }}>
        { this.state.user ? <UserScreen user={this.state.user} /> :
        <LoginButton facebookResponse={this.facebookResponse} />
        }
      </div>
    )
  }
}

export default App