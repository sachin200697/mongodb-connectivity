const mongoose = require('mongoose');

const connectivity = async () => {
	mongoose.set('strictQuery', true);
	await mongoose.connect('mongodb://localhost:27017/practice');
};

module.exports = connectivity;
