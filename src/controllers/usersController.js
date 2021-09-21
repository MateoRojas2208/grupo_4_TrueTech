const fs = require('fs');
const path = require('path');
const { re } = require('semver');
const uniqid = require("uniqid");
const { Z_ASCII } = require('zlib');


const controller = {
    login: (req, res) => {
		res.render("login", {})
	},
    register: (req, res) => {
		res.render("register", {})
	},
	profile: (req, res) => {
		res.render("profile", {})
	},
}





module.exports = controller;