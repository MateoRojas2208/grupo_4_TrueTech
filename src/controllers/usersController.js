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
        var usuarioALogearse;
        User.findOne({
            where: { email: mail }
        }).then((resultado) => {
            if (resultado == undefined) {
                res.render("./users/login", {
                    errors: {
                        email: {
                            errors1: "El mail y la contraseña no coinciden"
                        }
                    }
                })
            } else {
                if (bcrypt.compareSync(req.body.password, resultado.password) == true) {
                    req.session.userLoged = resultado
                    res.cookie("userEmail", resultado.id, {
                        maxAge: Infinity
                    })
                    res.redirect("/")
                }
            }
        }).catch(() => {
            res.render("login", {
                errors1: "El mail y la contraseña no coinciden"
            })
        })
    },
    // carga la pagina de register
    register: (req, res) => {
        res.render("register", { errors2: "" })
    },
    // cuando apretas crear en register/POST de creacion de cuenta en base de datos
    createNewAccount: (req, res) => {
        User.findAll().then(u => {
            let usersNumber = u.length
            let resultValidation = validationResult(req)

            if (resultValidation.errors.length > 0) {
                res.render("register", {
                    errors2: "",
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
        let user = req.session.userLoged.id
        User.findByPk(user)
            .then(user => {
                res.render('profile', { user });
            }
            )
    },

}









module.exports = controller;