var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require("express-session")
const Sequelize = require('sequelize');
const mysql = require("mysql2")
const cors=require("cors");
var indexRouter = require('./src/routes/index');
var usersRouter = require('./src/routes/users');
var productRouter = require("./src/routes/product")
var apiRouter = require("./src/routes/api")
var app = express();
const loggedMiddleware = require("./src/middlewares/loggedMiddleware");

const corsOptions ={
   origin:'*', 
   credentials:true,   //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//session middleware
app.use(session({
  secret: 'TrueTechSecreto',
  resave: true,
  saveUninitialized: true,
}))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(loggedMiddleware)

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/product", productRouter)
app.use("/api", apiRouter)



// view engine setup
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  let errorLogin = false
  res.render('error', { errorLogin });
});

module.exports = app;