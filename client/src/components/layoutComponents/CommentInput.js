/* global io */
// import statements for React and component
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CommentInput extends Component {
  static propTypes = {
    onSubmitMessage: PropTypes.func.isRequired,
  }

  state = {
    message: '',
  }

  render() {
    const { onSubmitMessage } = this.props;
    const { message } = this.state;
    return (
      <form
        action="."
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitMessage(message);
          this.setState({ message: '' });
        }}
      >
        <input
          type="text"
          placeholder="Enter message..."
          value={this.state.message}
          onChange={e => this.setState({ message: e.target.value })}
        />
        <button type="submit">Send</button>
      </form>
    )
  }
}

export default CommentInput;
