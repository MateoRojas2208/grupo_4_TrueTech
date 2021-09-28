const { validationResult } = require("express-validator")
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFilePath = path.resolve(__dirname, '../data/usersDataBase.json');


const controller = {
    login: (req, res) => {
		res.render("login", {})
	},
    register: (req, res) => {
		res.render("register", {})
	},
	createNewAccount: (req, res) => {
		const resultValidation = validationResult(req);
        let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
        console.log(validationResult(req))
        if (resultValidation.errors.length > 0) {
            res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        else {
            let ultimaID = users[users.length -1].id;

            let newUser = {
                id: ultimaID + 1,
                username: req.body.userName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                autorizacion: "user"
            }
            let newJSON = users.concat(newUser);
            let userJSON = JSON.stringify(newJSON, null, 2);

            fs.writeFileSync( usersFilePath, userJSON);
            res.redirect("/login")
        }
        
	},
	profile: (req, res) => {
		res.render("profile", {})
	},
}









module.exports = controller;