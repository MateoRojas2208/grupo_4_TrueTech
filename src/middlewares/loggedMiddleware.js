const fs = require("fs");
const db = require("../../database/models");
const User = db.User;

function guestMiddleware(req, res, next) {
   if (req.cookies.userEmail) {
      let UserIdInCookie = req.cookies.userEmail.email
      User.findByPk(UserIdInCookie)
         .then(function (user) {
         if (user) {
            req.session.userLoged = user
         }
      })
   }
   res.locals.isLogged = false
   if (req.session && req.session.userLoged) {
      res.locals.isLogged = true
      res.locals.userLogged = req.session.userLoged
      User.findOne({
         where: {
            email: req.session.userLoged.email
         }
      }).then(function (user) {
         req.session.userLoged = user.dataValues
         res.locals.userLogged = req.session.userLoged
      })
   }
   next()
}
module.exports = guestMiddleware