const express = require('express')
const app = express();
const home = require('./routes/home/index')


app.set("view engine", 'ejs')

app.use('/', home);


module.exports = app;