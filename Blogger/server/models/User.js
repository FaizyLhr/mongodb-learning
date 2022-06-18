const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
	username: {
		type: String,
		lowercase: true,
		unique: true,
		required: [true, "can't be blank"],
	},
	email: {
		type: String,
		lowercase: true,
		unique: true,
		required: [true, "can't be blank"],
	},
	password: { type: String, minLength: 4, trim: true },
});

module.exports = mongoose.model("User", UserSchema);
