const router = require('express').Router();

const authRoutes = require('./auth'); // auth.js

router.use('/auth', authRoutes);

module.exports = router;
