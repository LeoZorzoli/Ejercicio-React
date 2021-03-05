const express = require('express');
const app = express();
const cors = require('cors');

const personsRouter = require('./controllers/persons');

app.use(cors());
app.use(express.json());

app.use(express.static('build'))
app.use('/api/persons', personsRouter);

module.exports = app;