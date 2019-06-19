import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Nav from './Nav';

class TripDash extends Component {
  render() {
    return (

      <div>
        <Nav />
        <div className="container" id="tripdash">
          <div className="row">
            <section>
              <Link to="/rides">
                <button type="button">Rides</button>
              </Link>
              <Link to="/supplies">
                <button type="button">Supplies</button>
              </Link>
              <Link to="/guests">
                <button type="button">Guests</button>
              </Link>
            </section>
          </div>
          <div className="headline row">
            <section>
              <h3>Trip Title</h3>
            </section>
          </div>

          <div className="row">
            <div className="col">
              <section>
                <div><img src={ require('../images/bing.png') } />
</div>
              </section>
            </div>
            <div className="col">
              <section>
                <div className="aboutTrip">ABOUT TRIP</div>
              </section>
            </div>
          </div>

          <div className="row">
            <section>
              <div>COMMENTS</div>
            </section>
          </div>

        </div>
      </div>


    );
  }
}
export default TripDash;
