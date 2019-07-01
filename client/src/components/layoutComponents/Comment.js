/* global io */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentInput from './CommentInput';
import CommentMessage from './CommentMessage';
import API from '../../utils/API';
import './Comment.css';

const socket = io();

class Comment extends Component {
  constructor(props) {
    super(props);
    this.messagesEndRef = React.createRef();
  }

  state = {
    messages: [],
  }

  componentDidMount() {
    const { tripID } = this.props;
    API.getComments(tripID)
      .then(result => this.setState({ messages: result.data }));
    socket.on(tripID, (msg) => {
      this.setState(currentState => ({ messages: [...currentState.messages, msg] }));
    });
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  submitMessage = (messageString) => {
    const { tripID } = this.props;
    // on submitting the CommentInput form, send the message, add it to the list and reset the input
    const message = { tripID, messageBody: messageString };
    API.postComment(message)
      .catch(err => console.log(err));
  }

  scrollToBottom() {
    this.messagesEndRef.scrollTop = this.messagesEndRef.scrollHeight;
  }

  render() {
    const { messages } = this.state;
    return (
      <div>
        <div id="chatBox" ref={(el) => { this.messagesEndRef = el; }}>
          {messages.map(msg => (
            <CommentMessage
            // eslint-disable-next-line no-underscore-dangle
              key={msg._id}
              message={msg.messageBody}
              name={msg.userID.displayName}
              picture={msg.userID.pictureURL}
            />
          ))}
        </div>
        <div>
          <CommentInput onSubmitMessage={this.submitMessage} />
        </div>
      </div>
    );
  }
}

export default Comment;

Comment.propTypes = {
  tripID: PropTypes.string.isRequired,
};
