var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('gameover', function(message) {
	console.log(message);
});

jeu.on('nouveaujoueur', function(user, age) {
	console.log("Nouveau joueur:", user, age);
});

jeu.on('freeze', function(user) {
	console.log(user, "is frozen");
});


jeu.emit('gameover', 'Vous avez perdu !');
jeu.emit('nouveaujoueur', 'Mario', 35);
jeu.emit('freeze', "Mario");