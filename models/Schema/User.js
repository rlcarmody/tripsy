const mongoose, { Schema } = require('mongoose');

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  trips: [{
    type: Schema.Types.ObjectId,
    ref: 'Trip',
  }],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
