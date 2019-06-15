const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create')
  .post(userController.create);

router.route('/login')
  .post(userController.login);

module.exports = router;