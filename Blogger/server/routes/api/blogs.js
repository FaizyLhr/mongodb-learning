const router = require("express").Router();

const addBlogs = require("../middleware/addBlogs");

const BlogModel = require("../../models/Blog");

const { getUser, getSpecUser, getSpecBlog } = require("../middleware/allot");

//View Blogs
router.get("/:_id/blogs", getUser, (req, res) => {
	BlogModel.find({ createdBy: req.user._id })
		.limit(10)
		.then((blogs) => {
			console.log(blogs);
			res.status(200).send(blogs);
		})
		.catch((err) => res.status(500).send(err));
});

//add Blog
router.post("/:_id/addBlog", getUser, addBlogs);

//update Blog
router.put("/:_id/updateBlog/:id", getUser, getSpecBlog, async (req, res) => {
	const updateBlog = await BlogModel.findByIdAndUpdate(req.blog._id, req.body, {
		new: true,
	});
	res.status(200).send(updateBlog);
});

// delete User
router.delete("/:_id/delBlog/:id", getUser, getSpecBlog, async (req, res) => {
	const delUser = await BlogModel.findByIdAndDelete(req.blog._id, {
		new: true,
	});
	res.status(200).send(delUser);
});

module.exports = router;
