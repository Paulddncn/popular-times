const express = require('express');
require('dotenv').config();
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const session = require('express-session');
const path = require('path');
const Articles = require('./models/articles');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const { isAuthenticated } = require('./controllers/api/auth');
const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;


const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

var hbs = exphbs.create({});

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
  try {
    const articles = await Articles.fetchAll();
    res.render('main', { layout: 'index', data: articles, logged_in: req.session.logged_in });
    console.log(articles); 
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

app.get('/login', (req, res) => {
  try {
    res.render('login', { layout: 'index' });
  } catch (error) {
    res.status(500).console.log(error);
  }
});

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
});
