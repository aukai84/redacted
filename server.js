const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');