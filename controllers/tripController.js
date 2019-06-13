const Trip = require('../models/Schema/Trip');

module.exports = {
  //post
  create(req, res) {
    const { userID } = req.cookies;
    const { body: tripDetails } = req;
    tripDetails.organizer = userID;
    
    Trip.create(tripDetails)
      .then(result => {
        res.json(result)
      })
      .catch(err => res.status(422).json(err));
  },
  //get
  findOne(req, res) {
    Trip.findById(req.query.id)
      .then(result => res.json(result))
      .catch(err => res.status(404));
  },
  //post
  invite(req, res) {
    Trip.findById(req.query.id)
      .then(trip => trip.inviteMember(req.body, cb => res.json(cb)));
  }
}

