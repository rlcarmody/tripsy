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
        id="chatWindow"
        action="."
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitMessage(message);
          this.setState({ message: '' });
        }}
      >
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              placeholder="Thoughts?"
              value={message}
              onChange={e => this.setState({ message: e.target.value })}
            />
            <button type="submit" className="prefix">
              <i className="material-icons" id="sendMessage">send</i>
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CommentInput;
