const Ride = require('../models/Schema/Ride');

module.exports = {
  //post - done
  createRide(req, res) {
    const { userID } = req.cookies;
    const { body: rideDetails } = req;
    rideDetails.provider = userID;

    Ride.create(rideDetails)
      .then(data => res.json(data))
      .catch(err => res.status(422).json(err));
  },
  //get - done
  getRides(req, res) {
    Ride.find({ tripID: req.query.tripID })
      .populate({
        path: 'provider',
        select: 'displayName',
        populate: {
          path: 'riders'
        }
      })
      .then(data => res.json(data))
      .catch(err => res.status(404).json(err));
  },
  //update - done
  claimRide(req, res) {
    const { userID } = req.cookies;
    Ride.findByIdAndUpdate(req.query.rideID, { $push: { riders: userID}, $inc: { availableSeats: -1 } })
      .then(result => res.json(result))
      .catch(err => res.status(404).json(err));
  }
}