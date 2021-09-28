function guestMiddleware (req, res, next) {
    if (req.session.usuarioLogueado == undefined) {
        next()
    } else {
        res.send("Acceso denegado, ya tenes una cuenta")
    }
   }
   
   
   module.exports = guestMiddleware