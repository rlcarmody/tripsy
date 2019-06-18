import axios from "axios";

export default {

  createNewUser: function() {
    return axios.post("/api/create");
  },
  loginUser: function() {
    return axios.post("/api/login");
  },

  createTrip: function() {
    return axios.post("/api/");
  },
  getTrips: function() {
    return axios.get("/api/");
  },
  getOneTrip: function(id) {
    return axios.get("/api/tripID/" + id);
  },
  sendInvite: function() {
    return axios.post("/api/invite/");
  },
  acceptInvite: function() {
    return axios.put("/api/invite/");
  },
  findInvite: function(id) {
    return axios.get("/api/:inviteID");
  },
  addSupplies: function() {
    return axios.post("/api/supplies/");
  },
  getSupplies: function() {
    return axios.get("/api/supplies");
  },
  claimSupplies: function() {
    return axios.put("/api/supplies/");
  },
  getMessages: function() {
    return axios.get("/api/tripID/" + id);
  },
