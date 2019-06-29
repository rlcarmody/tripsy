import React from 'react';
import PropTypes from 'prop-types';
import dateFns from 'date-fns';
import { ListItem } from '../../layoutComponents/List';
import { Row, Col } from '../../layoutComponents/Grid';

function SingleRide({
  vehicleType, availableSeats, departureDate, driver,
}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col s8>
          <h3 className="font-italic">{vehicleType}</h3>
          {driver && <h5 className="font-italic">Ride offerred by: {driver}</h5>}
        </Col>
      </Row>
      <Row>
        <Col s6>
          {departureDate && (
          <p className="font-italic small">
              Departing: {dateFns.format(departureDate, 'MMMM DD, YYYY')}}
          </p>
          )}
        </Col>
      </Row>
      <Row>
        <Col s6>
          {availableSeats && <p className="font-italic small">Seats Available: {availableSeats}</p>}
        </Col>
        <Col s6>
            <button>Claim Seat</button>
        </Col>
      </Row>
      
    </ListItem>
  );
}

SingleRide.propTypes = {
  vehicleType: PropTypes.string.isRequired,
  departingDate: PropTypes.string.isRequired,
  availableSeats: PropTypes.string.isRequired,
  driver: PropTypes.string.isRequired,
};


export default SingleRide;
