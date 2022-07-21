const express = require('express');
const { index, show } = require('../controller/book');
const route = express.Router();

route.get('/', index);

route.get('/:id', show);

module.exports = route;
