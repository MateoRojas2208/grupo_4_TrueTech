const { validationResult } = require("express-validator")
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');
const usersFilePath = path.resolve(__dirname, '../data/usersDataBase.json');
const express = require('express');
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const db = require('../../database/models');
const User = db.User;
var rn = require('random-number')
let passordsss = 1234


const controller = {
    // carga pagina de login
    login: (req, res) => {
        let errors1 = ""
        res.render("login", { errors1 })
    },
    // te logea en la cuenta (falta hacer que sirva la verificacion)
    enter: (req, res) => {

        var mail = req.body.email
        var pass = req.body.password
        User.findOne({
            where: { email: mail }
        }).then((resultado) => {
            if (resultado !== null) {
                if (bcrypt.compareSync(pass, resultado.password)) {
                    req.session.isLogged = true
                    res.redirect("/users/profile:" + resultado.id);

                } else {
                    res.render("login", {
                        errors1: "El mail y la contraseña no coinciden (contraseña"
                    })
                }
            } else {
                res.render("login", {
                    errors1: "El mail y la contraseña no coinciden (mail)"
                })
            }
        })
    },
    // carga la pagina de register
    register: (req, res) => {
        res.render("register", {errors2: ""})
    },
    // cuando apretas crear en register/POST de creacion de cuenta en base de datos
    createNewAccount: (req, res) => {
        User.findAll().then(u => {
            let usersNumber = u.length
            let resultValidation = validationResult(req)

            if (resultValidation.errors.length > 0) {
                res.render("register", {
                    errors2 : "",
                    errors: resultValidation.mapped(),
                    oldData: req.body
                })
            } else {
                let link = req.file.path.replace("public", "")
                let imageLink2 = link.replace("\\", "/")
                User.create({
                    id: (usersNumber + 1),
                    full_name: req.body.name,
                    username: req.body.name,
                    email: req.body.email,
                    password: bcrypt.hashSync(req.body.password, 12),
                    photo: imageLink2,
                    clearence: 0
                }).then(res.redirect("/users/login"))
                    .catch(function (err) {
                        // print the error details
                        console.log(err, req.body.email);
                    })
            }
        })
    },

    // carga la pagina del perfil
    profile: (req, res) => {
        User.findByPk(req.params.id)
    .then(user => {
        res.render('profile', { user });
    }
    )
    },

}









module.exports = controller;