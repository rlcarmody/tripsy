const router = require('express').Router();
const rideController = require('../../controllers/rideController');

router.route('/')
  .post(rideController.createRide)
  .get(rideController.getRides)
  .put(rideController.claimRide);

module.exports = router;