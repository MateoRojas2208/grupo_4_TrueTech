const fs = require('fs');
const path = require('path');

let main;
const controller = {
    home: (req, res) => {
		let logeado = req.session.isLogged
		res.render("home", {isLogged: logeado})
	},
}
module.exports = controller;