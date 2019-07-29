/* eslint-disable no-console */

//
// Require some base modules
//
const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');

//
// Require our routes
//
const indexRouter  = require('./routes/index');
const blaRouter    = require('./routes/router');
const todosRouter  = require('./routes/router-todos');

//
// This app is an Express app
//
const app = express();

//
// View engine setup
//
// In this case, we are using Pug as engine.
// Views area stored in subdirectory 'views'
//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//
// Prepare for receiving json
//
app.use(bodyParser.json());

//
// Set up default headers
//
app.use((req, res, next) => {
  res.setHeader('cache-control', 'private, max-age=0, no-cache, no-store, must-revalidate');
  res.setHeader('expires', '0');
  res.setHeader('pragma', 'no-cache');
  next();
});

//
// Catch all routes with this prefix
//
app.use('/', indexRouter);
app.use('/bla', blaRouter);
app.use('/todos', todosRouter);

//
// Start server process
//
app.listen(process.env.PORT, () => console.log('App listening on port '+ process.env.PORT ));
