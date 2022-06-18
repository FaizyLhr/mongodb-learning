const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema({
	image: String,
	title: String,
	body: String,
	createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

module.exports = mongoose.model("Blog", BlogSchema);
