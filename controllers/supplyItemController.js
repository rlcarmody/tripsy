const SupplyItem = require('../models/Schema/SupplyItem');

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
    SupplyItem.findByIdAndUpdate(req.query.supplyItemID, { $set: { claimed: true, claimedBy: req.cookies.userID }})
      .then(result => res.json(result))
      .catch(err => res.status(400).json(err));
  }
}