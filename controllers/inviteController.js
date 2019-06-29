const Invite = require('../models/Schema/Invite');

module.exports = {
  //get - done
  find(req, res) {
    Invite.findById(req.params.inviteID)
      .populate({
        path: 'tripID',
        select: 'name location description organizer startDate endDate',
        populate: {
          path: 'organizer',
          select: 'displayName'
        }
      })
      .then(data => {
        const { email, expiration, tripID } = data;
        data.expiration < Date.now() ? res.status(410).end() : res.json({email, expiration, tripID, });
      })
      .catch(err => res.status(404).json(err));
  },  
}