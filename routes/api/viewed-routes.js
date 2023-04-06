const router = require('express').Router();
const axios = require('axios');
require('dotenv').config();

// api/viewed
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error'});
    }
});

module.exports = router;