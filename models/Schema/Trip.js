const mongoose, { Schema } = require('mongoose');

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
    ref: "User",
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
  supplies: [{
    type: Schema.Types.ObjectId,
    ref: 'SupplyItem',
  }],
  messages: [{
    type: Schema.Types.ObjectId,
    ref: 'Message',
  }],
  description: String,
});

const Trip = mongoose.model('Trip', TripSchema);

module.exports = Trip;
