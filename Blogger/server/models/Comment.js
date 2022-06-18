const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
	{
		text: { type: String },
		commentedBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
		commentedOn: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Comment", CommentSchema);
