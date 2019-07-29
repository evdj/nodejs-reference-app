const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // Simple direct response
    // res.send('Oh yeah !');

    // Rendered using some template engine
    res.render('index', { title: 'Hello Homepage world !' });
});

module.exports = router;

