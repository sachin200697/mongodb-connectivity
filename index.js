const connectivity = require('./connectivity');
const Player = require('./Player');

connectivity();

const createPlayer = async () => {
	const player1 = new Player({
		name: 'Virat Kohli',
		age: '37',
		DOB: new Date('1990-09-10'), //yyyy-mm-dd
	});

	await player1.save();
};

createPlayer();
