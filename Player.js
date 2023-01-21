const mongoose = require('mongoose');

const PlayerSchema = mongoose.Schema({
	name: {
		type: String,
		require: true,
	},
	age: {
		type: Number,
		require: true,
	},
	DOB: {
		type: Date,
		require: true,
	},
	isRetired: {
		type: Boolean,
		require: true,
		default: false,
	},
});

const Player = mongoose.model('player', PlayerSchema);

module.exports = Player;
