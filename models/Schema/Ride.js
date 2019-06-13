const mongoose = require('mongoose');

const { Schema } = mongoose;

const RideSchema = new Schema({
  tripID: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: true,
  },
  provider: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  riders: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }],
  seats: {
    type: Number,
    required: true,
  },
  departureDate: {
    type: Date,
    required: true,
  },
  vehicleType: {
    type: String,
    trim: true,
  },
});

const Ride = mongoose.model('Ride', RideSchema);

module.exports = Ride;
