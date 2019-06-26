import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import { ListItem } from '../../layoutComponents/List';
import { Row, Col } from '../../layoutComponents/Grid';

function Trip({
  name, location, startDate, endDate, organizer, description,
}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{name}</h3>
          {location && <h5 className="font-italic">{location}</h5>}
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {organizer && <p className="font-italic small">Organized by {organizer}</p>}
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          {startDate && endDate && (
          <p className="font-italic small">
              Start: {dateFns.format(startDate, 'MMMM DD, YYYY')} End: {dateFns.format(endDate, 'MMMM DD, YYYY')}
          </p>
          )}
        </Col>
      </Row>
      <Row>
        <Col size="12 sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListItem>
  );
}

Trip.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  organizer: PropTypes.string.isRequired,
  description: PropTypes.string,
};

Trip.defaultProps = {
  description: 'The organizer has not entered a description yet',
};

export default Trip;
