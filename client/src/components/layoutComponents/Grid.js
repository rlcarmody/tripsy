import React from 'react';
import PropTypes from 'prop-types';

// Exporting the Container, Row, and Col components from this file

export function Container({ fluid, children }) {
  return (
    <div className={`container${fluid ? '-fluid' : ''}`}>
      {children}
    </div>
  );
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return (
    <div className={`row${fluid ? '-fluid' : ''}`}>
      {children}
    </div>
  );
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ children }) {
  return (
    <div className="col">
      {children}
    </div>
  );
}

Container.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Container.defaultProps = {
  fluid: false,
};

Row.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

Row.defaultProps = {
  fluid: false,
};

Col.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
