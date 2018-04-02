const express = require('express');
const router = express.Router();
const knex = require('../knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.send('GET all offers')

  //select name from offer
  knex('offer')
    .select('name')
    .then(rows => res.json(rows))
});

// GET a single offer
router.get('/:id', function(req, res, next) {
  res.send('GET single offer')
})

// POST a new offer
router.post('/', function(req, res, next) {
  const {
    name
  } = req.body

  knex('offer')
    .insert([{
      name: name
    }])
    .returning('id')
    .then(result => res.json(result))
})

// DELETE a single offer
router.delete('/:id', function(req, res, next) {
  res.send('DELETE an offer')
})

// UPDATE an offer
router.patch('/:id', function(req, res, next) {
  const {
    id
  } = req.params
  const {
    name
  } = req.body

  knex('offer')
    .update({
      name: name
    })
    .where('id', id)
    .returning('id')
    .then(result => res.json(result))
})

module.exports = router;