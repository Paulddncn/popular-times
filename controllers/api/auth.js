const router = require('express').Router();

const Users = require('../../models/User');

// router.post('/login', async (req, res) => {
// 	try {
// 		console.log(req.body);
// 		const users = await Users.findOne({
// 			where: {
// 				email: req.body.email,
// 				password: req.body.password,
// 			},
// 		});
// 		res.status(200).json(users);
// 	} catch (error) {
// 		res.status(500).json(error);
// 	}
// });

// Login
router.post('/login', async (req, res) => {
	try {
		const dbUserData = await Users.findOne({
			where: {
				email: req.body.email,
			},
		});

	if (!dbUserData) {
		res.status(400).json({ message: 'Incorrect email or password. Please try again.'});
		return;
	}

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