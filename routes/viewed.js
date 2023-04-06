const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/viewed', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NYT_API_KEY}`);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error'});
    }
});

module.exports = router