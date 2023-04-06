const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/emailed', async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${process.env.NYT_API_KEY}`);
        res.json(response.data.results);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router