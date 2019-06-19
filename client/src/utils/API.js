import axios from 'axios';

export default {

  createNewUser: function(body) {
    return axios.post("/api/users/create", body);
  },
  loginUser: function(body) {
    return axios.post("/api/users/login", body)

  },

  createTrip: function() {
    return axios.post("/api/trips");
  },
  getTrips: function() {
    return axios.get("/api/trips");
  },
  getOneTrip: function(tripID) {
    return axios.get("/api/trips/tripID/"+ tripID);
  },
  sendInvite: function(tripID) {
    return axios.post("/api/trips/invite?tripID="+ tripID);
  },
  acceptInvite: function(tripID) {
    return axios.put("/api/invite?tripID="+ tripID);
  },
  findInvite: function(inviteID) {
    return axios.get("/api/invitation/" + inviteID);
  },
  addSupplies: function(tripID) {
    return axios.post("/api/trips/supplies?tripID="+ tripID);
  },
  getSupplies: function(tripID) {
    return axios.get("/api/trips/supplies?tripID=<tripID?>");
  },
  claimSupplies: function(supplyItemID) {
    return axios.put("/api/trips/supplies?supplyItemID="+ supplyItemID);
  },
  getMessages: function() {
    return axios.get("/api/tripID/");
  },
  postRide: function() {
    return axios.post("/api/rides");
  },
  getRides: function(tripID) {
    return axios.get("/api/rides?tripID="+ tripID);
  },
  claimRide: function(rideID) {
    return axios.put("/api/rides?rideID="+ rideID)
  },
  postComment: function() {
    return axios.post("/api/messages")
  },
  getComments: function(tripID) {
    return axios.get("/api/messages?tripID="+ tripID)
  }

}
