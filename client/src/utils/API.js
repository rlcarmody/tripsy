import axios from 'axios';

export default {

  createNewUser(body) {
    return axios.post('/api/users/create', body);
  },
  loginUser(body) {
    return axios.post('/api/users/login', body);
  },
  createTrip(body) {
    return axios.post('/api/trips', body);
  },
  getTrips() {
    return axios.get('/api/trips');
  },
  getOneTrip(tripID) {
    return axios.get(`/api/trips/tripID/${tripID}`);
  },
  sendInvite(tripID, email) {
    return axios.post(`/api/trips/invite?tripID=${tripID}`, { email });
  },
  acceptInvite(tripID) {
    return axios.put(`/api/trips/invite?tripID=${tripID}`);
  },
  findInvite(inviteID) {
    return axios.get(`/api/invitation/${inviteID}`);
  },
  addSupplies(tripID) {
    return axios.post(`/api/trips/supplies?tripID=${tripID}`);
  },
  getSupplies(tripID) {
    return axios.get(`/api/trips/supplies?tripID=${tripID}`);
  },
  claimSupplies(supplyItemID) {
    return axios.put(`/api/trips/supplies?supplyItemID=${supplyItemID}`);
  },
  getMessages() {
    return axios.get('/api/tripID/');
  },
  postRide(body) {
    return axios.post('/api/rides', body);
  },
  getRides(tripID) {
    return axios.get(`/api/rides?tripID=${tripID}`);
  },
  claimRide(rideID) {
    return axios.put(`/api/rides?rideID=${rideID}`);
  },
  postComment() {
    return axios.post('/api/messages');
  },
  getComments(tripID) {
    return axios.get(`/api/messages?tripID=${tripID}`);
  },
};
