const express = require("express");
const mongoose = require("mongoose");

const foodRoute = require("./routes/foodRoute");

const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect("mongodb://localhost:27017/myapp", {
	useNewUrlParser: true,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
});

// app.get("/", (req, res) => {
// 	res.send("Hello");
// });

app.use(foodRoute);

app.listen(port, () => {
	console.log(`Your App is running on port : ${port}`);
});
