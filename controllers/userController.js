const User = require('../models/Schema/User');

module.exports = {
  //post
  create(req, res) {
    User.create(req.body)
      .then((data) => res.cookie('userID', data._id, {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: true,
      }).json(data))
      .catch(err => res.status(422).json(err))
  },
  //post
  login(req, res) {
    User.findOne({ email: req.body.email })
      .then(data => res.cookie('userID', data._id, {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: true,
      }).json(data));
  },
  getTrips(req, res) {
    User.findById(req.cookies.userID)
      .select('displayName')
      .populate({
        path: 'trips',
        populate: {
          path: 'organizer',
          select: 'displayName'
        }
      })
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  }
}