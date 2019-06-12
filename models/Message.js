const mongoose, { Schema } = require('mongoose');

const MessageSchema = new Schema({
  tripID: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  messageBody: {
    type: String,
    trim: true,
    minlength: 1
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;