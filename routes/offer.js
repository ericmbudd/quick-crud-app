var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('GET all offers')
});

// GET a single offer
router.get('/:id', function(req, res, next) {
  res.send('GET single offer')
})

// POST an offer
router.post('/', function(req, res, next) {
  res.send('POST a new offer')
});

// DELETE a single offer
router.delete('/:id', function(req, res, next) {
  res.send('DELETE an offer')
})

// UPDATE a single offer
router.patch('/:id', function(req, res, next) {
  res.send('UPDATE all offers')
})

module.exports = router;