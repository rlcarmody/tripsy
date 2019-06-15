const Message = require('../models/Schema/Message');

module.exports = {
  //post - done
  postMessage(req, res) {
    const userID = req.cookies.userID;
    const { messageBody, tripID } = req.body;
    Message.create({ userID, messageBody, tripID })
      .then(result => res.json(result))
      .catch(err => res.json(err));
      //TODO fire emitter
  }, 
  getMessages(req, res) {
    Message.find({ tripID: req.query.tripID })
      .populate({
        path: 'userID',
        select: 'displayName'
      })
      .then(results => res.json(results))
      .catch(err => res.status(404).json(err));
  }
}