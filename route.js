var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
});

app.get('/sous-sol', function(req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});

app.get('/etage/:etagenum/chambre', function(req, res) {
	res.render('chambre.ejs', {
		etage: req.params.etagenum
	});
});

app.get('/compter/:nombre', function(req, res) {
	var noms = ['Robert', 'Jacques', 'David'];
	res.render('page.ejs', {
		compteur: req.params.nombre,
		noms: noms
	});
});

// app.get('/etage/:etagenum/chambre', function(req, res) {
// 	res.setHeader('Content-Type', 'text/plain');
// 	res.end('Vous êtes à la chambre de l\'étage n°' + req.params.etagenum);
// });

app.listen(8088);