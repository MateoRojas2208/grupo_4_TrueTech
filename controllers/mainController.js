const fs = require('fs');
const path = require('path');


let main;
const controller = {
    home: (req, res) => {
		res.render("home")
	},
}






module.exports = controller;