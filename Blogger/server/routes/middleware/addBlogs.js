const BlogModel = require("../../models/Blog");

const addBlog = async function (req, res) {
	try {
		const { image, title, body } = req.body;

		// console.log(req.body);

		if (!(image && title && body)) {
			res.status(400).send("All input is required");
			// console.log("All input is required");
		}

		const blog = await BlogModel.create({
			image,
			title,
			body,
		});

		blog.createdBy = req.user._id;

		blog.save();

		res.status(201).json(blog);
	} catch (e) {
		console.log(e);
		res.status(400).send(e);
	}
};

module.exports = addBlog;
