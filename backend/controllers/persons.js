const list_persons = require('../utils/persons');

const personsRouter = require('express').Router();

personsRouter.get('/', (req, res) => {
    res.json(list_persons);
});

module.exports = personsRouter;