const router = require('express').Router();
const tripRoutes = require('./trips');
const inviteRoutes = require('./invitation');
const messageRoutes = require('./messages');
const rideRoutes = require('./rides');
const userRoutes = require('./users');

router.use('/trips', tripRoutes);
router.use('/invitation', inviteRoutes);
router.use('/messages', messageRoutes);
router.use('/rides', rideRoutes);
router.use('/users', userRoutes);

module.exports = router;