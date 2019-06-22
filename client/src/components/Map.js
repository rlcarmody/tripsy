import React from 'react';
import { ReactBingmaps } from 'react-bingmaps';
import PropTypes from 'prop-types';
import './Map.css';

const BingMap = ({ coordinates }) => {
  const BING_API_KEY = process.env.REACT_APP_BING_MAPS_KEY;
  return (
    <ReactBingmaps
      id="map"
      bingmapKey={BING_API_KEY}
      center={coordinates}
      zoom={15}
      pushPins={[{
        location: coordinates,
        option: {
          icon: '/mapicon.png',
        },
      }]}
    />
  );
};

export default BingMap;

BingMap.propTypes = {
  coordinates: PropTypes.arrayOf(Number).isRequired,
};
