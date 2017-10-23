import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

const isitCode = require('isit-code-james');
const elfUtils = require('isit-code-james').elfUtils;

router.get('/home-directory', function(req, res, next) { 
	'use strict';
	
	const home = elfUtils.getHomeDir();
	res.render("index", {"home" : home});
});

router.get('/first-word', function(req, res, next) {
	'use strict';
	const firstWord = elfUtils.getFirstWord();
	res.send({"firstWord": firstWord});
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
