var express = require('express');
var router = express.Router();
var isitSiteTools = require('isit-site-tools-james');

/* GET home page. */
router.get('/', function (req, res, next) {
    'use strict';
    res.render('index', {title: 'server'});
});

router.get('/foo', function (req, res, next) {
    'use strict';
    const foo = isitSiteTools.imageHelp.configSettings;
    console.log(foo);
    res.send({config: foo.getElvenImages()});
});


module.exports = router;
