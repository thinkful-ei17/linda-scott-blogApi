'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = express.Router();

const { Blog } = require('./models');





router.get('/', (req, res) => { });

router.post('/', jsonParser, (req, res) => { });

router.delete('/:id', (req, res) => {});

router.put('/:id', jsonParser, (req, res) => { });



















module.exports = router;