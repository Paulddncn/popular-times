const router = require('express').Router();
const saveRoutes = require('./save'); // save.js
const authRoutes = require('./auth'); // auth.js

router.use('/auth', authRoutes);
router.use('/save', saveRoutes)

module.exports = router;
