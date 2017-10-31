import index from './index.css';

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week04-UseIsitCode' });
});

module.exports = router;
