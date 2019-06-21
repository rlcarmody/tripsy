import React, { Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './layoutComponents/Nav';

function Rides({
  provider, availableSeats, vehicleType, departureDate, riders,
}) {
  return (
    <Fragment>
      <Nav />
      <div className="container" id="rides">
      <div className="row flex-wrap-reverse">
        <div className="col">
          <h3 className="font-italic">
            {vehicleType}
                        </h3>
            {provider && (
            <h5 className="font-italic">
              {provider}
            </h5>
            )}
          </div>
          <div className="col">
            
          </div>
        </div>
        <div className="row">
          <div className="col" size="md-6">
            <p className="font-italic small">

Departure:
              {' '}
              {departureDate}
                        </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="font-italic">

Seats Available:
              {' '}
              {availableSeats}
                        </p>
          </div>
          <div className="col">
            <p>
              {riders}
                        </p>
          </div>
        </div>
      </div>
      </Fragment>
  );
}

export default Rides;
