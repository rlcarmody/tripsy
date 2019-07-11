const Trip = require('../models/Schema/Trip');
const User = require('../models/Schema/User');
const emailer = require('../emailer');
const geocoder = require('../geocoder');
const auth = require('../auth');

const insertCoordinates = async ({_id, location}) => {
  const coordinates = await geocoder(location);
  Trip.findByIdAndUpdate(_id, { $set: { coordinates } })
    .catch(err => console.log(err));
}

module.exports = {
  //post - done
  create(req, res) {
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    const userID = user.id;
    const { body: tripDetails } = req;
    tripDetails.organizer = userID;
    tripDetails.members = [userID];
    Trip.create(tripDetails)
      .then(result => {
        insertCoordinates(result);
        User.findByIdAndUpdate(userID, { $push: { trips: result._id } }).exec();
        res.json(result);
      })
      .catch(err => res.status(422).json(err));
  },
  //get - done
  findOne(req, res) {
    Trip.findById(req.params.tripID)
      .populate({
        path: 'members',
        select: 'displayName pictureURL email'
      })
      .then(result => res.json(result))
      .catch(err => res.status(404).json(err));
  },
  //post - done
  invite(req, res) {
    const { tripID } = req.query;
    const invitations = req.body.email.map(email => ({ email, tripID }));
    Trip.findById(tripID)
      .then(trip => trip.inviteMember(invitations, (cb) => {
        cb.forEach(invite => {
          invite.populate({
            path: 'tripID',
            populate: {
              path: 'organizer',
              select: 'displayName'
            }
          }).execPopulate()
            .then(data => {
              const { email, _id, tripID: {organizer: { displayName }, location }} = data;
              emailer(email, displayName, location, _id);
            });
        })
        return res.json(cb);
      }));
  },
  //update - done
  acceptInvite(req, res) {
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    const userID  = user.id;
    const { tripID } = req.query;
    Trip.findByIdAndUpdate(tripID, { $push: { members: userID } })
      .then(result =>  {
        User.findByIdAndUpdate(userID, { $push: { trips: tripID } })
          .then(data => console.log(`Trip successfully added to ${data.displayName}'s trips`));
        return res.json(result);
      })
      .catch(err => res.status(404).json(err));
  },
  //post - done
  addSupplies(req, res) {
    const io = req.app.get('io');
    const { tripID } = req.query;
    const supplies = req.body.supplies.map(item => ({ name: item, tripID }));
    Trip.findById(tripID)
      .then(trip => trip.addSupplies(supplies, cb => {
        io.emit(`${tripID}-Supplies`);
        return res.json(cb);
      }))
      .catch(err => res.status(404).json(err));
  }
}

