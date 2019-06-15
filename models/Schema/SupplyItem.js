const mongoose = require('mongoose');

const { Schema } = mongoose;

const SupplyItemSchema = new Schema({
  tripID: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  claimed: {
    type: Boolean,
    default: false,
  },
  claimedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const SupplyItem = mongoose.model('SupplyItem', SupplyItemSchema);

module.exports = SupplyItem;
