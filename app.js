var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var studentRouter = require('./routes/student.routes')
let authRouter = require('./routes/auth.routes')
let locationRouter = require('./routes/location.routes')
let instituteRouter=require('./routes/Institute.routes')
let courseRouter=require('./routes/course.routes')



var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/login', authRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/student', studentRouter);
app.use('/Location', locationRouter);
app.use('/institute',instituteRouter);
app.use('/course',courseRouter);

module.exports = app;
