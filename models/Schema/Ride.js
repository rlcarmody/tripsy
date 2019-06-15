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
  availableSeats: {
    type: Number,
    required: true,
    min: 0,
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
