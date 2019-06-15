const router = require('express').Router();
const tripController = require('../../controllers/tripController');
const userController = require('../../controllers/userController');
const supplyItemController = require('../../controllers/supplyItemController');

router.route('/')
  .get(userController.getTrips)
  .post(tripController.create);

router.route('/tripID/:tripID')
  .get(tripController.findOne);

router.route('/invite')
  .post(tripController.invite)
  .put(tripController.acceptInvite);

router.route('/supplies')
  .post(tripController.addSupplies)
  .get(supplyItemController.getSupplies)
  .put(supplyItemController.claimSupplyItem);

  module.exports = router;
