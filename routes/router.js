//
// Require some base modules
//
const express = require('express');
const router  = express.Router();

// See html2jade.org

//
// Get homepage for this set of routes
//
router.get('/', function(req, res, next) {
    // res.send('Oh yeah !');
    res.render('index', { title: 'Rendered oh yeah !' });
});

//
// Show form for adding more entries
//
router.get('/form', function(req, res, next) {
    res.render('form', { title: 'Todos entry form' });
});

module.exports = router;

