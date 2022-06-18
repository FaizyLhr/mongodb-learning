const router = require("express").Router();

// const mongoose = require("mongoose");

const addUser = require("../middleware/addUser");

const UserModel = require("../../models/User");

router.get("/add", (req, res) => {
	console.log("chk");
	res.send("Users");
});

//View Users
router.get("/users", (req, res) => {
	UserModel.find({})
		.limit(10)
		.then((users) => {
			res.status(200).send(users);
		})
		.catch((err) => res.status(500).send(err));
});

//add User
router.post("/addUser", addUser);

//update User
router.put("/updateUser/:_id", async (req, res) => {
	const updateUser = await UserModel.findByIdAndUpdate(
		req.params._id,
		req.body,
		{
			new: true,
		}
	);
	res.status(200).send(updateUser);
});

// delete User
router.delete("/delUser/:_id", async (req, res) => {
	const delUser = await UserModel.findByIdAndDelete(req.params._id, {
		new: true,
	});
	res.status(200).send(delUser);
});

module.exports = router;
