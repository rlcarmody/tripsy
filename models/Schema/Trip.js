const mongoose = require('mongoose');

const { Schema } = mongoose;
const Invite = require('./Invite');
const SupplyItem = require ('./SupplyItem');

const TripSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    default: [0, 0],
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  members: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  createdDate: {
    type: Date,
    default: Date.now(),
  },
  rides: [{
    type: Schema.Types.ObjectId,
    ref: 'Ride',
  }],
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],
  description: String,
});

TripSchema.methods.inviteMember = function(data, cb) {
  Invite.insertMany(data).then(cb);
};

TripSchema.methods.addSupplies = function(data, cb) {
  SupplyItem.insertMany(data).then(cb);
}

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;
