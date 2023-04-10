// const router = require('express').Router();
// const isAuthenticated = require('./auth').isAuthenticated;
// const Articles = require('../../models/articles');

// router.get('/save-articles', isAuthenticated, async (req, res) => {
//   try {
//     // Retrieve the articles to be displayed from the database or elsewhere
//     const articles = await Articles.find({});

//     // Render the 'save.handlebars' template and pass the articles as a context object
//     res.render('save', { articles });
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Internal server error');
//   }
// });

// module.exports = router;
