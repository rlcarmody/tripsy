const SupplyItem = require('../models/Schema/SupplyItem');
const auth = require('../auth');

//routes in tripRoutes
module.exports = {
  getSupplies(req, res) {
    const { tripID } = req.query;
    SupplyItem.find({ tripID })
      .populate({
        path: 'claimedBy',
        select: 'displayName'
      })
      .then(data => res.json(data));
  },
  claimSupplyItem(req, res) {
    const io = req.app.get('io');
    const user = auth.verifyToken(req.cookies);
    if (!user) {
      return res.status(401).end();
    }
    SupplyItem.findByIdAndUpdate(req.query.supplyItemID, { $set: { claimed: true, claimedBy: user.id }})
      .then(result => {
        io.emit(`${result.tripID}-Supplies`);
        return res.json(result);
      })
      .catch(err => res.status(400).json(err));
  }
}