// const router = require('express').Router();
// const withAuth = require('./auth');
// const User = require('../../models/User');
// const Article = require('../../models/articles');

// // POST route to save an article by ID
// router.post('/save/:id', withAuth, async (req, res) => {
//     try {
//       const articleId = req.params.id;
//       const userId = req.session.user_id;
  
//       // Check if the user has already saved the article
//       const existingSave = await User.findOne({
//         where: {
//           id: userId
//         },
//         include: {
//           model: Article,
//           as: 'savedArticles',
//           where: {
//             id: articleId
//           }
//         }
//       });
  
//       if (existingSave) {
//         // If the user has already saved the article, send an error message
//         res.status(400).json({ message: 'Article already saved' });
//       } else {
//         // If the user has not saved the article, add it to their saved articles list
//         const user = await User.findOne({
//           where: {
//             id: userId
//           }
//         });
//         const article = await Article.findOne({
//           where: {
//             id: articleId
//           }
//         });
  
//         await user.addSavedArticle(article);
  
//         res.status(200).json({ message: 'Article saved successfully' });
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   module.exports = router;
  