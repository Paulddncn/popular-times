const router = require('express').Router();
// const emailedRoutes = require('./emailed-routes');
// const sharedRoutes = require('./shared-routes');
const viewedRoutes = require('./viewed-routes');
require('dotenv').config();

// router.use('/emailed', emailedRoutes);
// router.use('/shared', sharedRoutes);
router.use('/viewed', viewedRoutes);

module.exports = router;