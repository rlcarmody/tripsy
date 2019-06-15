const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({
  tripID: {
    type: Schema.Types.ObjectId,
    ref: 'Trip',
    required: true,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  messageBody: {
    type: String,
    trim: true,
    minlength: 1,
  },
  createdDate: {
    type: Date,
    default: Date.now()
  }
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
