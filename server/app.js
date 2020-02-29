const express = require('express');
const path = require('path');
const logger = require('morgan');
const port = 3333;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
