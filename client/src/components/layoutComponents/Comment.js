import React, { Component } from 'react'
import CommentInput from '../CommentInput'
import CommentMessage from '../CommentMessage'

class Comment extends Component {
  state = {
    messages: []
  }

  
  componentDidMount() {
    this.io.onopen = () => {
      // on connecting, do nothing but log it to the console
      console.log('connected')
    }

    this.io.onmessage = evt => {
      // on receiving a message, add it to the list of messages
      const message = JSON.parse(evt.data)
      this.addMessage(message)
    }
    
    const socket = io();
    socket.on(this.props.tripID, msg => {
        this.setState((currentState) => ({messages: [...currentState, msg]}));
      })
  }

  addMessage = message =>
    this.setState(state => ({ messages: [message, ...state.messages] }))

  submitMessage = messageString => {
    // on submitting the CommentInput form, send the message, add it to the list and reset the input
    const message = { name: this.state.name, message: messageString }
    this.io.send(JSON.stringify(message))
    this.addMessage(message)
  }

  render() {
    return (
      <div>
        <label htmlFor="name">
          Name:&nbsp;
          <input
            type="text"
            id={'name'}
            placeholder={'Enter your name...'}
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
        </label>
        <CommentInput
          ws={this.ws}
          onSubmitMessage={messageString => this.submitMessage(messageString)}
        />
        {this.state.messages.map((message, index) =>
          <CommentMessage
            key={index}
            message={message.message}
            name={message.name}
          />,
        )}
      </div>
    )
  }
}

export default Comment