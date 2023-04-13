const router = require('express').Router();

const Users = require('../../models/User');

router.post('/login', async (req, res) => {
	try {
		console.log("Login request received with body:", req.body);
		const user = await Users.findOne({
			where: {
				email: req.body.email,
				password: req.body.password,
			},
		});
		console.log("User found:", user)
		req.session.save(() => {
			req.session.user_id = user.id;
			req.session.logged_in = true;
			console.log("Session saved with user ID:", user.id);
			console.log("Session saved with logged_in:", req.session.logged_in);
			console.log("Session after save:", req.session);
			res.status(200).json(user);
		})
		
	} catch (error) {
		console.error("Error occurred during login:", error);
		res.status(500).json(error);
	}
});

router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
	  req.session.destroy(() => {
		console.log("Session destroyed for user ID:", req.session.user_id);
		res.status(204).end();
	  });
	} else {
	  console.log("No session to destroy");
	  res.status(404).end();
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


	const validPassword = await Users.findOne({
		where: {
			password: req.body.password,
		},
	});

	if (!validPassword) {
		res.status(400).json({ message: 'Incorrect email or password. Please try again.'});
		return;
	}

	// req.session.save(() => {
	// 	req.session.loggedIn = true;
	// });
		res.status(200).json({ user: dbUserData, message: 'You are now logged in!' });
	
	} catch (error) {
		console.log(error)
		res.status(500).json(error);
	}
});

module.exports = router;