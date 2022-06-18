const router = require("express").Router();

const addComment = require("../middleware/addComment");

const CommentModel = require("../../models/Comment");

const {
	getComment,
	getUser,
	getSpecUser,
	getSpecBlog,
} = require("../middleware/allot");

//View Comments by User
router.get("/:_id/userComments", getUser, (req, res) => {
	CommentModel.find({ createdBy: req.user._id })
		.limit(10)
		.then((comments) => {
			console.log(comments);
			res.status(200).send(comments);
		})
		.catch((err) => res.status(500).send(err));
});

//View Comments on Blog
router.get("/:id/blogComments", getSpecBlog, (req, res) => {
	CommentModel.find({ commentedOn: req.blog._id })
		.limit(10)
		.then((comments) => {
			console.log(comments);
			res.status(200).send(comments);
		})
		.catch((err) => res.status(500).send(err));
});

//add Comment
router.post("/:_id/addComment/:id", getUser, getSpecBlog, addComment);

//update Comment
router.put(
	"/:_id/updateComment/:id/:commentID",
	getUser,
	getSpecBlog,
	getComment,
	async (req, res) => {
		const updateComment = await CommentModel.findByIdAndUpdate(
			req.comment._id,
			req.body,
			{
				new: true,
			}
		);
		res.status(200).send(updateComment);
	}
);

// delete Comment
router.delete(
	"/:_id/delComment/:id/:commentID",
	getUser,
	getSpecBlog,
	getComment,
	async (req, res) => {
		const delComment = await CommentModel.findByIdAndDelete(req.comment._id, {
			new: true,
		});
		res.status(200).send(delComment);
	}
);

module.exports = router;
