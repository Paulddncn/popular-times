const express = require('express');
const dotenv = require('dotenv');


dotenv.config();
const NYT_API_KEY = process.env.NYT_API_KEY;

const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '')));

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });