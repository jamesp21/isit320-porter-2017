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

router.get('/first-word', function(request, response, next) { 'use strict';
    console.log(req.query);
    try {
        // Now call elfUtils with the sentence passed in the query.
        // Use Response.send to return the result.
        // Here is one way to handle an error if it occurs:
    } catch(e) {
        console.log(e);
        res.status(500).send(e)
    }
});

module.exports = router;
