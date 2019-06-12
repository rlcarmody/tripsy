const mongoose, { Schema } = require('mongoose');

const InviteModel = new Schema({
  tripID: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  expiration: {
    type: Date,
    default: (Date.now().getDate() + 7)
  }
});

const Invite = mongoose.model('Invite', InviteModel);

module.exports = Invite;