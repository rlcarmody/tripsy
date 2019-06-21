import React from 'react';
import { ListItem } from './layoutComponents/List';
import { Row, Col } from './layoutComponents/Grid';


function Trip({ name, location, startDate, endDate, organizer, description }) {
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
          <p className="font-italic small">Organized by {organizer}</p>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">
              Start: {startDate} 
              End: {endDate}
          </p>
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

export default Trip;
