const router = require('express').Router();
const userController = require('../../controllers/userController');

router.route('/create')
  .post(userController.findOrCreate);

router.route('/login')
  .get(userController.login);

router.route('/logout')
  .get(userController.logout);

router.route('/userDetails')
  .get(userController.getUserNameAndPicture);

module.exports = router;