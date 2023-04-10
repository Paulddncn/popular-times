const User = require('./User');
const SavedArticles = require('./SavedArticles');

User.hasMany(SavedArticles, {
    foreignKey: 'user_id',
});
  
SavedArticles.belongsTo(User, {
    foreignKey: 'user_id'
});


  
module.exports = { User, SavedArticles };
