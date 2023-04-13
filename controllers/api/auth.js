const router = require('express').Router();
const Users = require('../../models/User');

// Create / Sign-Up Route
// router.post('/login', async (req, res) => {
// 	try {
// 		const dbUserData = await Users.create(req.body);
	
// 		req.session.save(() => {
// 		  req.session.user_id = dbUserData.id;
// 		  req.session.logged_in = true;
	
// 		  res.status(200).json(dbUserData);
// 		});
// 	  } catch (err) {
// 		res.status(400).json(err);
// 	  }

// 	// try {
// 	// 	console.log(req.body);
// 	// 	const users = await Users.findOne({
// 	// 		where: {
// 	// 			email: req.body.email,
// 	// 			password: req.body.password,
// 	// 		},
// 	// 	});
// 	// 	res.status(200).json(users);
// 	// } catch (error) {
// 	// 	res.status(500).json(error);
// 	// }
// });

// Login Route
router.post('/login', async (req, res) => {
	try {
		const dbUserData = await Users.findOne({
			where: {
				email: req.body.email,
			},
		});

		if (!dbUserData) {
			res
				.status(400)
				.json({ message: 'Incorrect email or password. Please try again.' });
			return;
		}

		// checkPassword()?
		const validPassword = await Users.findOne({
			where: {
				password: req.body.password,
			},
		});

		if (!validPassword) {
			res
				.status(400)
				.json({ message: 'Incorrect email or password. Please try again.' });
			return;
		}

		req.session.save(() => {
			req.session.user_id = dbUserData.id;
			req.session.logged_in = true;

			res.json({ user: dbUserData, message: 'You are now logged in!' });
		});
	} catch (error) {
		console.log(error);
		res.status(500).json(error);
	}
});

// Logout Route
router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end();
		});

		res.json({ message: 'You are now logged out.' });
	} else {
		res.status(404).end();
	}
});

module.exports = router;