var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server;
var createServer = function() {

	server = http.createServer(instructionsNouveauVisiteur);
	server.listen(8080);
}

var instructionsNouveauVisiteur = function(req, res) {
	//res.writeHead(200);

	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);

	console.log(params);
	res.writeHead(200, {
		"Content-Type": "text/plain"
	});
	if ('prenom' in params && 'nom' in params) {
		res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
	} else {
		res.write('Vous devez bien avoir un prénom et un nom, non ?');
	}
	res.end();

	server.on('request', function() {
		console.log('listen, there is someone over there.');
	});
	//res.end('Salut tout le monde !');
}



var closeServer = function() {
	server.on('close', function() { // On écoute l'évènement close
		console.log('It\'s closed, Bye bye ! ');
	});
	// Démarre le serveur
	server.close(); // Arrête le serveur. Déclenche l'évènement close
}


createServer();



//closeServer();