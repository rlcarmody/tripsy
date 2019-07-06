import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ buttonText, buttonFunction }) => (
  <button className="btn" type="button" onClick={buttonFunction}>
    {buttonText}
  </button>
);

ActionButton.propTypes = {
  buttonText: PropTypes.string.isRequired,
  buttonFunction: PropTypes.func.isRequired,
};

export default ActionButton;
