var express = require('express');
var router = express.Router();
var npmPorter = require("npmporter");

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week04-NpmProject' });
});

router.get('/npm-package-info', function(req, res, next) {
    'use strict';
    var packageInfo = npmPorter.getPackageDescription();
    res.send({"packageInfo": packageInfo});
});

module.exports = router;
