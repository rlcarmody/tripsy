import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import API from '../../utils/API';
import Trip from '../Trip';
import Signup from './Signup';
import { Container, Col, Row } from '../layoutComponents/Grid';
import ActionButton from '../ActionButton';
import Nav from '../layoutComponents/Nav';
import Card from '../layoutComponents/Card';
import { List } from '../layoutComponents/List';
import './Invitation.css';

class Invitation extends Component {
  state = {
    inviteID: '',
    isSignedIn: false,
    name: '',
    location: '',
    description: '',
    startDate: '',
    endDate: '',
    organizer: '',
    tripID: '',
  }


  componentDidMount() {
    const { location: { search } } = this.props;
    const { inviteID } = queryString.parse(search);
    this.setState({ inviteID });
    API.findInvite(inviteID)
      .then((data) => {
        const {
          isSignedIn,
          tripID: {
            _id,
            name,
            location,
            description,
            startDate,
            endDate,
            organizer: {
              displayName: organizer,
            },
          },
        } = data.data;
        this.setState({
          isSignedIn, name, location, description, startDate, endDate, organizer, tripID: _id,
        });
      })
      .catch(err => console.log(err));
  }

  refreshInvite = () => {
    this.setState({ isSignedIn: true });
  };

  handleAccept = (event) => {
    event.preventDefault();
    const { history } = this.props;
    const { tripID } = this.state;
    API.acceptInvite(tripID)
      .then(() => {
        history.push('/home');
      });
  };

  render() {
    const { location: { search, pathname }, history } = this.props;
    const { isSignedIn } = this.state;
    return (
      <Fragment>
        {isSignedIn && <Nav />}
        <Container>
          <Row>
            <Col>
              <Card className="invitation">
                {!isSignedIn && <h4>You were invited on this trip. Please create an account to accept</h4>}
                <List>
                  <Trip {...this.state} />
                  {isSignedIn && <ActionButton buttonText="Accept Invitation" buttonFunction={this.handleAccept} />}
                </List>
              </Card>
            </Col>
            {!isSignedIn && (
            <Col>
              <Signup
                redirectURL={pathname + search}
                history={history}
                callback={this.refreshInvite}
              />
            </Col>
            )}
          </Row>
        </Container>
      </Fragment>
    );
  }
}

Invitation.propTypes = {
  location: PropTypes.shape({
    hash: PropTypes.string.isRequired,
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
  }).isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Invitation;
