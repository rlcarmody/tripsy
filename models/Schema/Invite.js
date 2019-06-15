const mongoose = require('mongoose');

const { Schema } = mongoose;

const InviteModel = new Schema({
  tripID: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: true,
  },
  expiration: {
    type: Date,
    default: Date.now() + 259200000,
  },
  email: {
    type: String,
    require: true,
  }
});

const Invite = mongoose.model('Invite', InviteModel);

module.exports = Invite;
