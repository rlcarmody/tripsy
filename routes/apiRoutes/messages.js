const router = require('express').Router();
const messageController = require('../../controllers/messageController');

router.route('/')
  .get(messageController.getMessages)
  .post(messageController.postMessage);

  module.exports = router;