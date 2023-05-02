var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MemoryStore = require('memorystore')(session);
// .env 사용할 수 있도록 설정
require('dotenv').config();

// 작성한 route 미들웨어
const routes = require('./routes');

var app = express();

// 세션
const maxAge = 60 * 1000 * 5;

// 세션 정보
const sessionInfo = {
  secret: process.env.SECRET_KEY,
  resave: false,
  secure: false,
  saveUninitialized: true,
  store: new MemoryStore({ checkPeriod: maxAge }),
  cookie: {
    maxAge: maxAge,
  },
};

// 세션 미들웨어 등록
app.use(session(sessionInfo));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// router 미들웨어 등록
routes.forEach((item) => {
  const { path, cont } = item;
  app.use(path, cont);
});

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
  res.render('error');
});

module.exports = app;
