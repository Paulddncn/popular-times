const router = require('express').Router();

const Users = require('../../models/User');

router.post('/login', async (req, res) => {
	try {
		console.log(req.body);
		const users = await Users.findOne({
			where: {
				email: req.body.email,
				password: req.body.password,
			},
		});
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;



// var router = require('express').Router();
// const exphbs = require('express-handlebars');

// // // router.get('/login', (req, res) => {
// // //     res.render('login');
// // // });

// const express = require('express');
// const exphbs = require('express-handlebars');
// const app = express();

// // Configure template Engine and Main Template File
// app.engine('hbs', exphbs({
//     defaultLayout: 'index',
// }));
// // Setting template Engine
// app.set('view engine', 'hbs');

// router.get('/login', (req, res) => {
//     try {
//       res.render('login', { layout: 'index' });
//     } catch (error) {
//       res.status(500).console.log(error);
//     }
// });

// module.exports = router;

// api/auth/login
