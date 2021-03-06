const express = require('express');
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const redacted = require('./modules/redacted.js');
const message = require('./routes/message.js');
let app = express();

const hbs = handlebars.create({
  extname: '.hbs',
  defaultLayout: 'app'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/message', (req, res, next) => {
    req.body.message = redacted(req.body.message);
    next();
});
app.use('/message', message);



module.exports = app;