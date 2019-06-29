const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create')
  .post(userController.findOrCreate);

router.route('/login')
  .get(userController.login);

router.route('/logout')
  .post(userController.logout);

module.exports = router;