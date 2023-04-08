require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    // Database name
    'times_db',
    // User
    'root',
    // Password
    'INSERT PASSWORD',
    {
      // Database location
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );

// let sequelize;

// if (process.env.JAWSDB_URL) {
// 	sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else { 
//     sequelize = new Sequelize(
//         process.env.DB_NAME,
//         process.env.DB_USER,
//         process.env.DB_PASS,
//         {
//             host: 'localhost',
//             dialect: 'mysql',
//             port: 3306
//         }
//     );
// }

module.exports = sequelize;