const express = require("express");
const app = express();
app.use(express.json());
const port = process.env.port || 3000;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personSchema = Schema({
	_id: Schema.Types.ObjectId,
	name: String,
	age: Number,
	stories: [{ type: Schema.Types.ObjectId, ref: "Story" }],
});

const storySchema = Schema({
	author: { type: Schema.Types.ObjectId, ref: "Person" },
	title: String,
	fans: [{ type: Schema.Types.ObjectId, ref: "Person" }],
});

const Story = mongoose.model("Story", storySchema);
const Person = mongoose.model("Person", personSchema);

const author = new Person({
	_id: new mongoose.Types.ObjectId(),
	name: "Ian Fleming",
	age: 50,
});

 author.save(await function (err) {
	// if (err) return handleError(err);

	const story1 = new Story({
		title: "Casino Royale",
		author: author._id, // assign the _id from the person
	});

	// story1.save(function (err) {
	// 	if (err) return handleError(err);
	// 	// that's it!
	// });
});

Story.findOne({ title: "Casino Royale" })
	.populate("author")
	.exec(function (err, story) {
		// if (err) return handleError(err);
		console.log(story);
		// prints "The author is Ian Fleming"
	});

app.get("/", (req, res) => {
	res.send(author);
});
