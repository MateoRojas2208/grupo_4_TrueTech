function loggedMiddleware (req, res, next) {
    if (req.session.usuarioLogueado != undefined) {
        next()
    } else {
        res.send("Crea una cuenta")
    }
   }
   
   
   module.exports = loggedMiddleware