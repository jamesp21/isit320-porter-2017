var express = require('express');
var router = express.Router();
const config = require('isit-code-james').elfConfig;

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

router.get('/getConfig', function(req, res, next) { 'use strict';
    config.loadAsync()
        .then(function(configuration) {
            // WRITE CODE TO SEND THE CONFIGURATION
            // VIA HTTP
            response.send(configuration);
        })
        .catch(function(err) {
            throw err
        })
});

module.exports = router;
