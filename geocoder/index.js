const axios = require('axios');
const { BING_API_KEY } = process.env;
const GEOCODE_URL = 'https://dev.virtualearth.net/REST/v1/Locations/';

module.exports = (query) => {
  return axios(`${GEOCODE_URL}?maxResults=1&&key=${BING_API_KEY}&query=${query}`)
    .then(result => result.data.resourceSets[0].resources[0].geocodePoints[0].coordinates)
    .catch(err => console.log(err));
}