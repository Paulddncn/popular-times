const router = require('express').Router();

const User = require('../../models/User');

router.post('/save/:id', async (req, res) => {
  try {
    const articleId = req.params.id;
    const userId = req.session.user_id;

    // Check if the user has already saved the article
    const existingSave = await User.findOne({
      where: {
        id: userId
      },
      include: {
        model: SavedArticles,
        as: 'saved_articles',
        where: {
          id: articleId
        }
      }
    });

    if (existingSave) {
      // If the user has already saved the article, send an error message
      res.status(400).json({ message: 'Article already saved' });
    } else {
      // If the user has not saved the article, add it to their saved articles list
      const user = await User.findOne({
        where: {
          id: userId
        }
      });
      const article = await SavedArticles.findOne({
        where: {
          id: articleId
        }
      });

      await user.addSaved_article(article);

      res.status(200).json({ message: 'Article saved successfully' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

  