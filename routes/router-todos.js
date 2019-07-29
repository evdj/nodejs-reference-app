const express = require('express');
const router  = express.Router();
const Todo    = require('../app/Todo');

router.get('/', (_, res) => {
  Todo.findAll().then((todos) => {
    res.send(todos);
  });
});

router.post('/', (req, res) => {
  Todo.create({ note: req.body.note })
    .then((todo) => {
      // res.send(todo);
      res.redirect('/todos');
    });
});

router.delete('/:id', (req, res) => {
  Todo.findById(req.params.id)
    .then(todo => todo.destroy())
    .then(() => res.send());
});

module.exports = router;


