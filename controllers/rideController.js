const Ride = require('../models/Schema/Ride');
const auth = require('../auth');

module.exports = {
  //post - done
  createRide(req, res) {
    const io = req.app.get('io');
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    const userID = user.id;
    const { body: rideDetails } = req;
    rideDetails.provider = userID;

    Ride.create(rideDetails)
      .then(data => {
        io.emit(`${rideDetails.tripID}-Rides`);
        return res.json(data);
      })
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
    const io = req.app.get('io');
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    const userID = user.id;
    Ride.findByIdAndUpdate(req.query.rideID, { $push: { riders: userID}, $inc: { availableSeats: -1 } })
      .then(result => {
        io.emit(`${result.tripID}-Rides`);
        return res.json(result);
      })
      .catch(err => res.status(404).json(err));
  }
}