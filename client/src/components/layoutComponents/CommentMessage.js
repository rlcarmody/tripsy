import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ name, message }) => (
  <p>
    <strong>{name}:</strong> <em>{message}</em>
  </p>
);

export default Message;

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
