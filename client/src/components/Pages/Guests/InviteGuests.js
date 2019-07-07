import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Row, Container } from '../../layoutComponents/Grid';
import API from '../../../utils/API';
import Nav from '../../layoutComponents/Nav';

class InviteGuests extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newGuest: '',
      guests: [],
    };
  }

  addGuest = () => {
    this.setState(currentState => ({ guests: [...currentState.guests, currentState.newGuest], newGuest: '' }));
  }

  handleChange = (e) => {
    this.setState({ newGuest: e.target.value });
  }

  handleRemove = (email) => {
    this.setState(currState => ({ guests: currState.guests.filter(guest => guest !== email) }));
  }

  handleInviteGuests = (event) => {
    const { tripID } = this.props;
    const { guests } = this.state;
    event.preventDefault();
    API.sendInvite(tripID, guests)
      .then(() => {
        if (this.props.match.params.var === 'fromNew') {
          this.props.history.push('/AddSupplies');
        } else {
          this.props.history.push('/tripDash');
        }
      });
  }

  render() {
    const { checkLoginStatus } = this.props;
    const { newGuest, guests } = this.state;
    return (
      <Fragment>
        <Nav checkLoginStatus={checkLoginStatus} />
        <Container>
          <div className="row center-align">
            <div className="col s12 center-align">
              <Link to="/rides">
                <button type="button" className="button btnNav">Rides</button>
              </Link>
              <Link to="/supplies">
                <button type="button" className="button btnNav">Supplies</button>
              </Link>
              <Link to="/inviteGuests">
                <button type="button" className="button btnNav">Invite Guests</button>
              </Link>
              <Link to="/tripDash">
                <button type="button" className="button btnAction">This Trip</button>
              </Link>
              <Link to="/home">
                <button type="button" className="button btnNav">My Trips</button>
              </Link>
            </div>
          </div>

          <Row>
            <div className="col s12 center-align">
              <h2 id="subHeadline">Invite your friends!</h2>
            </div>
          </Row>

          <form onSubmit={this.handleInviteGuests} id="inviteguests">
            <div className="formField">
              <input
                className="formFieldInput"
                type="email"
                name="email"
                id="email"
                placeholder="Your Friend's Email Address..."
                value={newGuest}
                onChange={this.handleChange}
              />

              {guests.map(guest => (
                <div key={guest} className="chip">
                  {guest}
                  <button type="button" onClick={() => this.handleRemove(guest)}>
                    <i className="material-icons">close</i>
                  </button>
                </div>
              ))}
            </div>
            <br />
            <button
              className="btn waves-light"
              type="button"
              onClick={this.addGuest}
            >
              Add Guest
            </button>

            <input
              className="btn waves-light formButton"
              type="submit"
              id="btn"
              placeholder="Next"
            />

          </form>
          <br />
          <p id="linkP">
            <Link id="linkP" to="/addSupplies">
              Skip This Step
            </Link>
          </p>
        </Container>
      </Fragment>
    );
  }
}
export default withRouter(InviteGuests);

InviteGuests.propTypes = {
  tripID: PropTypes.string.isRequired,
  checkLoginStatus: PropTypes.func.isRequired,
};
