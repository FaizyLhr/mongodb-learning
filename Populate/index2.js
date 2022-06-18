const mongoose = require("mongoose"),
	Schema = mongoose.Schema;

mongoose
	.connect("mongodb://localhost:27017/schema", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connection Successful"))
	.catch((err) => console.log(err));

const PersonSchema = new Schema({
	name: String,
	age: Number,
	stories: [{ type: Schema.ObjectId, ref: "Story" }],
});

const StorySchema = new Schema({
	_creator: {
		type: Schema.ObjectId,
		ref: "Person",
	},
	title: String,
	fans: [{ type: Schema.ObjectId, ref: "Person" }],
	arr: Array,
});

const Story = mongoose.model("Story", StorySchema);
const Person = mongoose.model("Person", PersonSchema);

const author = new Person({
	_id: new mongoose.Types.ObjectId(),
	name: "Ian Fleming",
	age: 50,
	arr: ["fir", "sec", "third"],
});

// author.save(function (err) {
// 	if (err) return handleError(err);

// 	const story1 = new Story({
// 		title: "Casino Royale",
// 		author: author._id, // assign the _id from the person
// 	});

// 	story1.save(function (err) {
// 		if (err) return handleError(err);
// 		// that's it!
// 	});
// });

let result = Story.findOne({ title: /Casino/i })
	.populate("_creator")
	.exec(function (err, story) {
		if (err) {
			console.log("The creator is %s", story.author.name);
			// prints "The creator is Aaron"
		}
		// console.log(JSON.stringify(story));
		console.log(story);
		console.log(story.arr[1]);
	});

// console.log(result);
