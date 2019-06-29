const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  displayName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  trips: [{
    type: Schema.Types.ObjectId,
    ref: 'Trip',
  }],
  facebookID: {
    type: String,
    required: true
  },
  pictureURL: String
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
