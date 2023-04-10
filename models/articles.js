const axios = require('axios');

const apiKey = process.env.NYT_API_KEY
const baseUrl = 'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json';

const article = {
    async fetchAll() {
        try {
            const response = await axios.get(`${baseUrl}?api-key=${apiKey}`);
            const articles = response.data;
            return articles;
        } catch (error) {
            console.error(error);
            return[];
        }
    }
}

module.exports = article;
