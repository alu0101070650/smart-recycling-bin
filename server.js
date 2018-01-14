"use strict";

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const handlebars  = require('express-handlebars');

const index = require('./routes/index');

const port = process.env.PORT;

const app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.engine('html', handlebars({defaultLayout: 'main'}));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
