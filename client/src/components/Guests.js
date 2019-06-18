import React, { Component, Fragment } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './Nav';

class Guests extends Component {
  render() {
    return (
      <Fragment>

        <Nav />

        <div className="container" id="guests">

          <div className="row">
            <section>
            <Link to="/tripdash">
                <button type="button">Trip</button>
              </Link>
              <Link to="/rides">
                <button type="button">Rides</button>
              </Link>
              <Link to="/supplies">
                <button type="button">Supplies</button>
              </Link>
            </section>
          </div>

          <div className="headline row">
            <section>
              <h3>Guests</h3>
            </section>
          </div>

          <div className="row">
            <div className="col">
              <section>
                <div>MAP</div>
              </section>
            </div>
            <div className="col">
              <section>
                <div className="aboutTrip">
                  <h5>About Trip</h5>
                  <p>
                    Our trip is a camping trip to Mt Hood.
                  </p></div>
              </section>
            </div>
          </div>

          <div className="row">
            <section>
              <div>COMMENTS</div>
            </section>
          </div>

        </div>

      </Fragment>

    );
  }
}
export default Guests;
