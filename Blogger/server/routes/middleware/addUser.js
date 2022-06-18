const UserModel = require("../../models/User");

const addUser = async function (req, res) {
	try {
		const { username, email, password } = req.body;

		// console.log(req.body);

		// Validate User input
		if (!(username && email && password)) {
			res.status(400).send("All input is required");
			// console.log("All input is required");
		}

		// Create user in our database
		const user = await UserModel.create({
			username,
			email,
			password,
		});
		user.save();

		res.status(201).json(user);
	} catch (e) {
		console.log(e);
	}
};

module.exports = addUser;
