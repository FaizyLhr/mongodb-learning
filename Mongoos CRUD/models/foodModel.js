const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const foodSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
	},
	calories: {
		type: Number,
		default: 1,
		validate(value) {
			if (value < 0) {
				throw new Error("Negative Calories are not Possible");
			}
		},
	},
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
