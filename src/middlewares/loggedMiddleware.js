function loggedMiddleware (req, res, next) {
    if (req.session.isLogged != undefined) {
        next()
    } else {
        let errorLogin = true
        res.render("error", {errorLogin})
    }
   }
   
   
   module.exports = loggedMiddleware