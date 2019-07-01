import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ name, message, picture }) => (
  <div>
    <div className="messageName">
      {name}:
    </div>
    <div className="centeredRow">
      <img src={picture} alt={name} className="chatPicture" /> {message}
    </div>
  </div>
);

export default Message;

Message.propTypes = {
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

Message.defaultProps = {
  picture: '/user-placeholder.png',
};
