const User = require('../models/Schema/User');

module.exports = {
  //post
  create(req, res) {
    User.create(req.body)
      .then((data) => res.cookie('UserID', data._id, {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: true,
      })).redirect('/trips')
        .catch(err => res.status(422).json(err))
  },
  //post
  login(req, res) {
    User.findOne({ email: req.body.email })
      .then(result => res.cookie('UserID', data._id, {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: true,
      })).redirect('/');
  },
  getTrips(req, res) {
    User.findById(req.cookies.UserID)
      .select('displayName')
      .populate('trips')
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  }
}