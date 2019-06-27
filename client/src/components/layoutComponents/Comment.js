/* global io */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentMessage from './CommentMessage';
import API from '../../utils/API';

class Comment extends Component {
  state = {
    messages: [],
  }


  componentDidMount() {
    const { tripID } = this.props;
    API.getComments(tripID)
      .then(result => this.setState({ messages: result.data }));
    const socket = io();
    socket.on(tripID, (msg) => {
      this.setState(currentState => ({ messages: [...currentState.messages, msg] }));
    });
  }

  submitMessage = (messageString) => {
    const { tripID } = this.props;
    // on submitting the CommentInput form, send the message, add it to the list and reset the input
    const message = { tripID, messageBody: messageString };
    API.postComment(message)
      .catch(err => console.log(err));
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        {messages.map(msg => (
          <CommentMessage
            // eslint-disable-next-line no-underscore-dangle
            key={msg._id}
            message={msg.messageBody}
            name={msg.userID.displayName}
          />
        ))}
        <CommentInput onSubmitMessage={this.submitMessage} />
      </div>
    );
  }
}

export default Comment;

Comment.propTypes = {
  tripID: PropTypes.string.isRequired,
};
