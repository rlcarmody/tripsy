const router = require('express').Router();
const inviteController = require('../../controllers/inviteController');

router.route('/:inviteID')
  .get(inviteController.find);

module.exports = router;