const { validationResult } = require("express-validator")
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFilePath = path.resolve(__dirname, '../data/usersDataBase.json');
const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');



const controller = {
    login: (req, res) => {
        res.render("login", {})
    },
    enter: (req, res) => {
        let archivoUsersJson = fs.readFileSync(path.join(__dirname, '../data/usersDataBase.json'), { encoding: "utf-8" })
		let users = JSON.parse(archivoUsersJson)


        var mail = req.body.email
        var pass = req.body.password

        let verification = users.find(x => x.email == mail)

        if (bcrypt.compareSync(pass, verification.password) ) {
            req.session.isLogged = true
            res.send("Welcome User"+" "+ verification.username);
        } else {
            res.send("no salio")
        }
        // console.log(req.body.email)
    },
    register: (req, res) => {
        console.log(req.session)
        res.render("register")
    },
    createNewAccount: (req, res) => {
            let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            
            let ultimaID = users[users.length - 1].id;
            
            let link = req.file.path.replace("public", "")
		    let imageLink2 = link.replace("\\", "/")
            
            let newUser = {
                id: ultimaID + 1,
                username: req.body.name,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                photo: imageLink2,
                clearence: "user"
            }
            

            let newJSON = users.concat(newUser);
            let userJSON = JSON.stringify(newJSON, null, 2);

            fs.writeFileSync(usersFilePath, userJSON);
            res.redirect("/users/login")

    },
    profile: (req, res) => {
        res.render("profile")
    },
    
}









module.exports = controller;