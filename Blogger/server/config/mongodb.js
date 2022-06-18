const mongoose = require("mongoose");

mongoose
	.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/Blogger", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		// useFindAndModify: false,
		// useCreateIndex: true,
	})
	.then(() => {
		console.log("Connection Successful!!");
	})
	.catch((err) => console.log(err));

module.exports = mongoose;
