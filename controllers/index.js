const router = require('express').Router();

const htmlRoutes = require('./html-routes');
const apiRoutes = require('./api'); // api/index.js

//router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
