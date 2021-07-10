const express = require('express');
const path    = require('path');
const logger  = require('morgan');

const app = express();
app.use(express.static('public'));

app.use(express.static(__dirname + '/public'));
// Settings
app.set('port', 5000);
app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.urlencoded({extended: false}));

// Routes
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));



module.exports = app;