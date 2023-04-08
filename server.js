const express = require('express');
require('dotenv').config();
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');


// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

var hbs = exphbs.create({});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('main');
})

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});