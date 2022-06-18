const express = require("express");
// const path = require("path");
// const bodyParser = require("body-parser");
// const va

const foodModel = require("../models/foodModel");

const app = express();

app.get("/foods", async (req, res) => {
	const food = await foodModel.find({});

	try {
		res.send(food);
	} catch (e) {
		res.status(500).send(e);
	}
});

app.post("/add", async (req, res) => {
	const food = new foodModel(req.body);

	try {
		await food.save();
		res.send(food);
	} catch (e) {
		res.status(500).send(e);
	}
});

app.put("/foods/:id", async (req, res) => {
	try {
		let food = await foodModel.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});
		res.send(food);
	} catch (e) {
		res.status(500).send(e);
	}
});

app.delete("/delfood/:id", async (req, res) => {
	try {
		const food = await foodModel.findByIdAndDelete(req.params.id);

		if (!food) {
			res.status(404).send("Page Not Found");
		}

		res.send(food);
	} catch (e) {
		res.status(500).send(e);
	}
});

{
	// app.put("/foods/:id", async (req, res) => {
	// console.log(req.params.id);
	// console.log(req.body);
	// const food = await foodModel.find({});
	// await foodModel.findByIdAndUpdate(
	// 	req.params.id,
	// 	req.body,
	// 	async (err, food) => {
	// 		if (err) {
	// 			console.log(err);
	// 		} else {
	// 			await food.save();
	// 			// console.log("Updated User : ", food);
	// 		}
	// 	}
	// );
	// res.send(food);
	// try {
	// 	await foodModel.findByIdAndUpdate(req.params.id, req.body);
	// await foodModel.findByIdAndUpdate(req.params.id, req.body);
	// await foodModel.save();
	// res.send(food);
	// } catch (e) {
	// 	res.status(500).send(e);
	// }
	// await food.save();
	// });
}

module.exports = app;
