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
    register: (req, res) => {
        res.render("register", {})
    },
    createNewAccount: (req, res) => {
            let users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
            
            let ultimaID = users[users.length - 1].id;
            
            let link = req.file.path.replace("public", "")
		    let imageLink2 = link.replace("\\", "/")
            
            let newUser = {
                id: ultimaID + 1,
                username: req.body.userName,
                email: req.body.email,
                password: bcrypt.hashSync(req.body.password, 12),
                photo: imageLink2,
                clearence: "user"
            }
            

            let newJSON = users.concat(newUser);
            let userJSON = JSON.stringify(newJSON, null, 2);

            fs.writeFileSync(usersFilePath, userJSON);
            res.send("sirve")

    },
    profile: (req, res) => {
        res.render("profile", {})
    },
    enter: (req, res) => {
        //username and password
        const myusername = req.body.email
        const mypassword = req.body.password
        // a variable to save a session
        var session = req.session;

        if (session.userid) {
            res.send("Welcome User"+ session.userid);
        } else {
            res.send("no salio")
        }
        console.log(req.body)
    }
}









module.exports = controller;