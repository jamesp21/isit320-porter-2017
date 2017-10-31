var express = require('express');
var router = express.Router();


const isitCode = require('isit-code-james');
const elfUtils = require('isit-code-james').elfUtils;

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week04-UseIsitCode' });
});

router.get('/home-directory', function(req, res, next) { 
	'use strict';
	res.send({ homeDirectory: elfUtils.getHomeDir() });
});

var params = {
	parameter1: 'value_1',
	parameter2: 'value 2',
	parameter3: 'value&3'
};


router.get('/first-word', function(request, response, next) { 'use strict';
    console.log(request.query);
    try {
        // Now call elfUtils with the sentence passed in the query.
        // Use Response.send to return the result.
        // Here is one way to handle an error if it occurs:
	response.send({ firstWord: elfUtils.getFirstWord(request.query.sentence) });
    } catch(e) {
        console.log(e);
        response.status(500).send(e)
    }
});


module.exports = router;
