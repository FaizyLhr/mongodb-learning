const CommentModel = require("../../models/Comment");

const addComment = async function (req, res) {
	// console.log(req.body);

	try {
		const { text } = req.body;

		// console.log(req.body);

		// Validate User input
		if (!text) {
			res.status(400).send("Input is required");
			// console.log("All input is required");
		}

		// Create comment in our database
		const comment = await CommentModel.create({
			text,
		});
		comment.commentedBy = req.user._id;
		comment.commentedOn = req.blog._id;

		comment.save();

		res.status(201).json(comment);
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};

module.exports = addComment;
