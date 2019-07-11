const Message = require('../models/Schema/Message');
const auth = require('../auth');

module.exports = {
  //post - done
  postMessage(req, res) {
    const io = req.app.get('io');
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    const userID = user.id;
    const { messageBody, tripID } = req.body;
    Message.create({ userID, messageBody, tripID })
      .then(result => result.populate(
        {
          path: 'userID',
          select: 'displayName pictureURL'
        }).execPopulate()
        .then(msg => {
          io.emit(`${msg.tripID}-Message`, msg)
          return res.json(msg);
        })
      )
      .catch(err => res.json(err));
    //TODO fire emitter
  },
  getMessages(req, res) {
    Message.find({ tripID: req.query.tripID })
      .populate({
        path: 'userID',
        select: 'displayName pictureURL'
      })
      .then(results => res.json(results))
      .catch(err => res.status(404).json(err));
  }
}