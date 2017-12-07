var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'Week10-FireBaseReact' });
});

router.get('/get-config', function(req, res, next) { 'use strict';
    try {
        config.useLocalConfig = false;
        config.loadAsync()
            .then(function (configuration) {
                res.send({ configuration: configuration });
            })
            .catch(function (err) {
                throw err
            })
    } catch(e) {
        throw new Error(e);
    }
});

module.exports = router;
