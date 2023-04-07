const User = require('./User');
const News = require ('./news')

User.hasMany(News, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  
  News.belongsTo(User, {
    foreignKey: 'user_id'
  });


  
module.exports = { User, News};
