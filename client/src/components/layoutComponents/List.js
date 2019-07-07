import React from 'react';
import PropTypes from 'prop-types';

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return (
    <li className="list-group-item">
      {children}
    </li>
  );
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
